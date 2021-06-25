const Product = require('../models/product');
const _ = require('lodash');

exports.productID = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                success: false,
                message: "Không tìm thấy sản phẩm"
            })
        }

        req.product = product;
        next();
    })
}

exports.create = (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({
            success: false,
            message: "Bạn cần nhập đủ thông tin"
        })
    }

    const newProduct = new Product({
        name,
        description,
        price
    })

    newProduct.save((err, product) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Không thêm được sản phẩm"
            })
        }

        res.json({
            success: true,
            message: "Thêm sản phẩm thành công",
            product: product
        })
    })
}

exports.update = (req, res) => {
    let product = req.product;  // lấy ra thông tin của sản phẩm thuộc id

    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({
            success: false,
            message: "Bạn cần điền đủ thông tin"
        })
    }

    // _.assignIn: merge các giá trị cũ vs giá trị mới
    product = _.assignIn(product, req.body);

    product.save((err, product) => {
        if (err) {
            return res.status.json({
                success: false,
                message: "Không sửa được sản phẩm"
            })
        }

        res.json({
            success: true,
            product
        })
    })
}

exports.remove = (req, res) => {
    let product = req.product;  // gán cho product = thông tin của sản phẩm thuộc id lấy đc ở productID()

    product.remove((err, deleteProduct) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Xóa sản phẩm không thành công"
            })
        }

        res.json({
            success: true,
            deleteProduct
        })
    })
}

// hiển thị dánh sách sản phẩm theo số limit
exports.list = (req, res) => {
    const PAGE_SIZE = 2;
    // let limit = req.query.limit ? +req.query.limit : 4; // xét số sản phẩm trả về

    let page = req.query.page;

    if (page) {
        // hiển thị sản phẩm theo page(phân trang)
        page = parseInt(page);
        if (page < 1) {
            page = 1;
        }

        let soLuongBoQua = (page - 1) * PAGE_SIZE;

        Product.find({})
            .skip(soLuongBoQua)
            .limit(PAGE_SIZE)
            .then(data => {
                res.json(data)
            })
            .catch(err => console.log(err))
    } else {
        // nếu ko có query page thì trả về tất cả sản phẩm
        Product.find().exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Không tim thấy sản phẩm"
                })
            }

            res.json({
                success: true,
                product
            })
        })
    }
}

// tìm kiếm sản phẩm theo tên
exports.searchProduct = (req, res) => {
    const searchProduct = req.query.name;   // lấy value của key(name) trên đường dẫn

    // tìm đến tất cả những bản ghi có trg là name rồi so sánh vs searchProduct
    // $i: không phân biệt chữ hoa chứ thường
    Product.find({ name: { $regex: searchProduct, $options: '$i' } })
        .exec((err, product) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Không tìm thấy sản phẩm"
                })
            }

            res.json({
                success: true,
                product: product
            })
        })
}
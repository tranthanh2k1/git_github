const Category = require('../models/category');

exports.categoryID = (req, res, next, id) => {
    // so sánh id trên đường dẫn với id trong DB rồi trả về thông tin dnah mục có id đó
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                success: false,
                message: "Không tìm thấy danh mục"
            })
        }

        req.category = category; // trả về thông tin của danh mục
        next(); // tiếp tục
    })
}

exports.create = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        })
    }

    try {
        const newCategory = new Category({ name });

        await newCategory.save();

        res.json({
            success: true,
            message: "Tạo danh mục thành công",
            category: newCategory
        })
    } catch (error) {

    }
}

exports.update = (req, res) => {
    // gán category = thông tin của danh mục khớp với id đã kiếm tra
    const category = req.category;

    // Simple validation
    if (!req.body.name) {
        return res.status(400).json({
            success: false,
            message: "Name is required"
        })
    }

    category.name = req.body.name;  // name = name gửi lên từ client
    category.save((err, data) => {
        if (err || !category) {
            res.status(400).json({
                success: false,
                message: "Không thêm được danh mục"
            })
        }

        res.json({
            success: true,
            data
        })
    })
}

exports.list = (req, res) => {
    Category.find((err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Danh mục không tồn tại"
            })
        }

        res.json(categories)
    })
}

exports.remove = (req, res) => {
    let category = req.category;

    category.remove((err, deleteCategory) => {
        if (err) {
            return res.status.json({
                success: false,
                message: "Không xóa được danh mục"
            })
        }

        res.json({
            success: true,
            deleteCategory
        })
    })
}
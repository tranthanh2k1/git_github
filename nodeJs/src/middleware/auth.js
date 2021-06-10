const jwt = require('jsonwebtoken');

// gửi request có header vs jsonwebtoken có dạng:
// Authorization: Bearer qưdqwdmqklwmndlkqwmdkwq
const verifytoken = (req, res, next) => {
    const authHeader = req.header('Authorization'); // lấy giá trị của Authorization
    // không có authHeader thì nó sẽ lấy giá trị authHeader
    // có authHeader thì lấy giá trị đằng sau dấu &&
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access token not found"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.userId = decoded.userId     // lấy userId từ kết quả decoded gán vào request.userId(yêu cầu gửi lên server thêm trường userId)
        next();     // tiếp tục
    } catch (error) {
        console.log(error);
        res.status(403).json({
            success: false,
            message: "Invalid token"    // token dởm
        })
    }
}

module.exports = verifytoken;
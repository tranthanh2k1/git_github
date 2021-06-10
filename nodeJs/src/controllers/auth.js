const User = require('../models/user');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

// @route POST api/auth/register
// @desc Regisster user
// @access Public
exports.register = async (req, res) => {
    const { username, password } = req.body; // destructuring giá trị username password từ ng dùng gửi lên

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({       // nếu không có username || password trả về status 400 và message
            success: false,
            message: "Không tồn tại username hoặc password"
        })
    }

    try {
        // Check trong DB có username không
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "Username đã tồn tại"
            })
        }

        // mã hóa mật khẩu của ng dùng
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        // Return token
        const accessToken = jwt.sign(
            { userId: newUser._id },    // gán id tự sinh ra của mongoDB  cho userId
            process.env.ACCESS_TOKEN_SECRET     // đoạn mã 'ưdqwdqwffwqfqqưe' trong file .env
        )

        // nếu đăng kí thành công sẽ trả về success, message, accesstoken(mã token)
        res.json({
            success: true,
            message: "User created sucessfully",
            accessToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// @route POST api/auth/login
// @desc Login user
// @access Public
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Không tồn tại username hoặc password"
        })
    }

    try {
        // Check username ng dùng nhập vào có trùng với username trong mongoDB không
        // nếu không có thì khỏi check password
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Tên đăng nhập hoặc mật khẩu không đúng"
            })
        }

        // Nếu tồn tại username
        const passwordValid = await argon2.verify(user.password, password); // dùng argon2 để check password ng dùng có trùng vs password trong DB
        // nếu password sai
        if (!passwordValid) {
            return res.status(400).json({
                success: false,
                message: "Tên đăng nhập hoặc mật khẩu không đúng"
            })
        }

        // Return token
        const accessToken = jwt.sign(
            { userId: user._id },  // user._id lấy trong DB
            process.env.ACCESS_TOKEN_SECRET
        )

        // nếu đăng kí thành công sẽ trả về success, message, accesstoken(mã token)
        res.json({
            success: true,
            message: "User logged in sucessfully",
            accessToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

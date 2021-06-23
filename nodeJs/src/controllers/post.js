const Post = require('../models/post');

// @route GET api/posts
// @desc READ posts
// @access private
exports.read = async (req, res) => {
    try {
        // tìm đến bài viết có trường user là userId client gửi lên
        const posts = await Post.find({ user: req.userId }).populate('user', ['username']); // populate: lấy dữ liệu trong bảng user
        // trả về những bài viết có user = userId từ client gửi lên
        res.json({
            success: true,
            posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// @route POST api/posts
// @desc Create post
// @access private
exports.create = async (req, res) => {
    const { title, description, url, status } = req.body;

    // Simple validation
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        })
    }

    try {
        // tạo biến chứa mảng giá trị lấy từ client
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,    // nếu url bắt đầu bằng https// thì lấy luôn, nếu không thì trả về https:// + url đó
            status: status || 'TO LEARN',
            user: '60c0c7c9ef5b313560839461'
        })

        await newPost.save();

        res.json({
            success: true,
            message: "Happy learning",
            post: newPost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// @route PUT api/posts
// @desc Update post
// @access private
exports.update = async (req, res) => {
    const { title, description, url, status } = req.body;

    // Simple validation
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        })
    }

    try {
        let updatedPost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || 'TO LEARN',
            user: '60c0d90b88e8011c9c77a5e7'
        }

        // _id của post = :id trên đường dẫn và user = userId từ client
        const postUpdateCondition = { _id: req.params.id, user: req.userId };

        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true }); // { new: true }: trả lại dữ liệu mới

        // User not authorised to update post or post not found
        if (!updatedPost) {
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised"
            })
        }

        res.json({
            success: true,
            message: "Update thành công!",
            post: updatedPost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

// @route DELETE api/posts
// @desc REMOVE posts
// @access private
exports.remove = async (req, res) => {
    try {
        // kiểm tra id của bài Post vs id truyền lên trên đường dẫn
        // ObjectId user của Post có trùng vs userId gửi lên từ client
        const postDeleteCondition = { _id: req.params.id, user: req.userId };
        const deletePost = await Post.findByIdAndDelete(postDeleteCondition);

        // User not authorised  or post not found
        if (!deletePost) {
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorised"
            })
        }

        res.json({
            success: true,
            message: "Delete thành công!",
            post: deletePost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
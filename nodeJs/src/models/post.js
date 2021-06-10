const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String
    },
    status: {
        type: String,
        enum: ['TO LEARN', 'LEARNING', 'LEARNED']    // 3 trạng thái mặc định
    },
    user: {
        type: Schema.Types.ObjectId,     // liên kết đến model User
        ref: 'users'    // liên kết đến bảng users
    }
});

module.exports = mongoose.model('posts', PostSchema);
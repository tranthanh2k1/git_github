const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, // bắt buộc phải có username
        unique: true    // ko đc trùng username
    },
    password: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema);
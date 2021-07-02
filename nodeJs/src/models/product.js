const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // photo: {
    //     type: String
    // },
    // shipping: {
    //     required: true,
    //     type: Boolean
    // },
    category: {
        type: ObjectId,
        ref: 'categories',      // liên kết đến bảng categories
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("products", ProductSchema);
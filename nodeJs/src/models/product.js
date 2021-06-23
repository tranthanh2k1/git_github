const mongoose = require('mongoose');
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
    },
    price: {
        type: Number,
    },
    photo: {
        type: String
    },
    shipping: {
        required: true,
        type: Boolean
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("products", ProductSchema);
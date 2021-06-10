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
        required: true,
        maxLength: 2000
    },
    price: {
        type: Number,
    },
    photo: {
        type: String
    },
    shipping: {
        // required: true,
        type: Boolean
    },
    sold: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("products", ProductSchema);
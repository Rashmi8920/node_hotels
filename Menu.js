const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    taste: {
        type: String,
        required: true,
        enum: ['sweet', 'spicy', 'sour'],
    },
    is_drink: {
        type: Boolean,
        dafault: false,
    },
    ingredients: {
      type:[String],
        dafault: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    }
})
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
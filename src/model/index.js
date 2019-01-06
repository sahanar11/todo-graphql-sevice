const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    created_at: Date,
    updated_at: Date
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;

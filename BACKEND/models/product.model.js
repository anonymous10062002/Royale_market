const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    product: String,
    brand: String,
    description: String,
    category: String,
    price: Number,
    quantity: Number
},{versionKey:false})

const ProductModel=mongoose.model('products',productSchema);

module.exports={ProductModel}
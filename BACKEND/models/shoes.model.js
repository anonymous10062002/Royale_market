const mongoose=require('mongoose');

const shoeSchema=mongoose.Schema({
    product: String,
    brand: String,
    description: String,
    category: String,
    price: Number
},{versionKey:false})

const ShoeModel=mongoose.model('shoes',shoeSchema);

module.exports={ShoeModel}
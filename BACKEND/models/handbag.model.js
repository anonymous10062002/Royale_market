const mongoose=require('mongoose');

const handbagSchema=mongoose.Schema({
    product: String,
    brand: String,
    description: String,
    category: String,
    price: Number
},{versionKey:false})

const HandbagModel=mongoose.model('handbags',handbagSchema);

module.exports={HandbagModel}
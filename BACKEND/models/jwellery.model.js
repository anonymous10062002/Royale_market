const mongoose=require('mongoose');

const jwellerySchema=mongoose.Schema({
    product: String,
    brand: String,
    description: String,
    category: String,
    price: Number
},{versionKey:false})

const JwelleryModel=mongoose.model('jwellries',jwellerySchema);

module.exports={JwelleryModel}
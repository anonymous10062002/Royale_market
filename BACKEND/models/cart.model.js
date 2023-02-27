const mongoose=require('mongoose');

const cartSchema=mongoose.Schema({
    userID:String,
    product: String,
    brand: String,
    description: String,
    category: String,
    price: Number,
    quantity: Number
},{versionKey:false})

const CartModel=mongoose.model('cartdata',cartSchema);

module.exports={CartModel}
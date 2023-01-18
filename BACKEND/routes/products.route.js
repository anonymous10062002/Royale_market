const express=require('express');
const {ProductModel}=require('../models/product.model');
const productRouter=express.Router();

productRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let products=await ProductModel.find(query);
        res.send(products);
    } catch (error) {
        res.sendStatus(404);
    }
})

productRouter.post('/add',async(req,res)=>{
    let product=req.body;
    try {
        await ProductModel.insertMany(product);
        res.send('Product added successfully.');
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports={productRouter}
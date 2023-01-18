const express=require('express');
const {ShoeModel}=require('../models/shoes.model');
const shoeRouter=express.Router();

shoeRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let shoes=await ShoeModel.find(query);
        res.send(shoes);
    } catch (error) {
        res.sendStatus(404);
    }
})

shoeRouter.post('/add',async(req,res)=>{
    let shoe=req.body;
    try {
        await ShoeModel.insertMany(shoe);
        res.send('Shoe added successfully.');
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports={shoeRouter}
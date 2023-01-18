const express=require('express');
const {JwelleryModel}=require('../models/jwellery.model');
const jwellRouter=express.Router();

jwellRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let jwells=await JwelleryModel.find(query);
        res.send(jwells);
    } catch (error) {
        res.sendStatus(404);
    }
})

jwellRouter.post('/add',async(req,res)=>{
    let jwellery=req.body;
    try {
        await JwelleryModel.insertMany(jwellery);
        res.send('Jwellery added successfully.');
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports={jwellRouter}
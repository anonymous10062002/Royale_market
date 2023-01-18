const express=require('express');
const {HandbagModel}=require('../models/handbag.model');
const bagRouter=express.Router();

bagRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let bags=await HandbagModel.find(query);
        res.send(bags);
    } catch (error) {
        res.sendStatus(404);
    }
})

bagRouter.post('/add',async(req,res)=>{
    let handbag=req.body;
    try {
        await HandbagModel.insertMany(handbag);
        res.send('Handbag added successfully.');
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports={bagRouter}
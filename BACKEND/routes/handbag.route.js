const express=require('express');
const {HandbagModel}=require('../models/handbag.model');
const bagRouter=express.Router();

bagRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let bags=await HandbagModel.find(query);
        if(bags.length){
            res.status(200).send(bags);
        }
        else{
            res.status(404).send('No product found!');
        }
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
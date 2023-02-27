const express=require('express');
const {CartModel}=require('../models/cart.model');
const cartRouter=express.Router();
const jwt=require('jsonwebtoken');
require("dotenv").config();

cartRouter.get('/',async(req,res)=>{
    try {
        let token=req.headers.authorization;
        let decoded=jwt.verify(token,process.env.key);
        if(decoded){
            let cartData=await CartModel.find({userID:decoded.userID});
            if(cartData.length){
                res.status(200).send(cartData);
            }
            else{
                res.status(404).send({"msg":"Oops! Your cart is empty."});
            }
        }
        else{
            res.status(401).send("Not Authorized!");
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

cartRouter.post('/add',async(req,res)=>{
    let {product,brand,description,category,price,quantity}=req.body;
    try {
        let token=req.headers.authorization;
        let decoded=jwt.verify(token,process.env.key);
        if(decoded){
            let cartData=await CartModel.find({userID:decoded.userID,product,brand,description,category,price});
            if(cartData.length){
                res.status(200).send({"msg":"product already there in Cart"});
            }
            else{
                let newCartItem=new CartModel({userID:decoded.userID,product,brand,description,category,price,quantity});
                await newCartItem.save();
                res.status(200).send({"msg":"Product added in cart"});
            }
        }
        else{
            res.status(401).send("Not Authorized!");
        }
    } catch (error) {
        res.status(400).send({"err":"Something went wrong in code.."});
    }
})

cartRouter.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id;
    try {
        let token=req.headers.authorization;
        let decoded=jwt.verify(token,process.env.key);
        if(decoded){
            await CartModel.findByIdAndDelete(id);
            res.status(200).send({"msg":"Item removed successfully"});
        }
        else{
            res.status(401).send("Not Authorized!");
        }
    } catch (error) {
        res.status(400).send({"err":"Something went wrong in code.."});
    }
})

module.exports={cartRouter}
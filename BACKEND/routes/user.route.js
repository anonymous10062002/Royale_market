const express=require('express');
const {UserModel}=require('../models/user.model');
const userRouter=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

userRouter.post('/login',async(req,res)=>{
    let {email,password}=req.body;
    try {
        let user=await UserModel.find({email});
        if(user.length){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    let token=jwt.sign({userID:user[0]._id},process.env.key);
                    res.status(200).send({token,username:user[0].username});
                }
                else{
                    res.status(400).send({err:'Wrong credentials!'});
                }
            })
        }
        else{
            res.status(404).send({msg:'No user found with this eamil! Please register first.'});
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

userRouter.post('/register',async(req,res)=>{
    let {username,email,password}=req.body;
    try {
        bcrypt.hash(password,4,async(err,securePass)=>{
            if(err){
                console.log(err);
            }
            else{
                let user=new UserModel({username,email,password:securePass});
                await user.save();
                res.status(200).send('Registered successfully');
            }
        })
    } catch (error) {
        res.sendStatus(400);
    }
})

// ADMIN HANDLED ROUTES

userRouter.get('/admin/users',async(req,res)=>{
    let query=req.query;
    try {
        let users=await UserModel.find(query);
        res.send(users);
    } catch (error) {
        res.sendStatus(404);
    }
})

module.exports={userRouter}
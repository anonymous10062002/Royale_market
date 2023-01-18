const express=require('express');
const {UserModel}=require('../models/user.model');
const userRouter=express.Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

userRouter.get('/',async(req,res)=>{
    let query=req.query;
    try {
        let users=await UserModel.find(query);
        res.send(users);
    } catch (error) {
        res.sendStatus(404);
    }
})

// userRouter.post('/login',async(req,res)=>{
//     try {
        
//     } catch (error) {
        
//     }
// })

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
                res.send('Registered successfully');
            }
        })
    } catch (error) {
        res.sendStatus(400);
    }
})

module.exports={userRouter}
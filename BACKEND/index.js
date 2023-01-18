const express=require('express');
const {connection} = require('./config/db');
const {bagRouter}=require('./routes/handbag.route');
const {shoeRouter}=require('./routes/shoes.route');
const {jwellRouter}=require('./routes/jwellery.route');
const {productRouter}=require('./routes/products.route');
const {userRouter}=require('./routes/user.route');
require('dotenv').config();

const app=express();

app.use(express.json());

app.use('/handbags',bagRouter);
app.use('/shoes',shoeRouter);
app.use('/jwellery',jwellRouter);
app.use('/products',productRouter);
app.use('/users',userRouter);

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Running at PORT:${process.env.port}`);
    } catch (error) {
        console.log('Unable to connect..!');
    }
})
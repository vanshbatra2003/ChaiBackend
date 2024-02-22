const express=require('express');
require('dotenv').config()
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/twitter',(req,res)=>{
    res.send('kalakutta');
})
app.get('/login',(req,res)=>{
    res.send('<h1>succesfully</h1>');
})
app.get('/chai',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`);
})
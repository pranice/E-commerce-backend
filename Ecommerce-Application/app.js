const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const morgan= require('morgan');
const mongoose= require('mongoose');
require('dotenv/config') ;
const api = process.env.API_URL;

//middleware
app.use(express.json());
app.use(morgan('tiny'));


app.get(`${api}/products`, (req,res) =>{
    const product = {
        id:1,
        name:'hair wig',
        image:'some_url',
    }
    res.send(product);
})
app.post(`${api}/products`, (req,res) =>{
    const newproduct = req.body;
    console.log(newproduct);
    res.send(newproduct)
    })

     
app.listen(3000,()=>{
    
    console.log('server is running http://localhost:3000');
} )
<<<<<<< HEAD
const {Order}= require('../models/order')                   
=======
const{Order}= require('..models/order');                      
>>>>>>> 92f579e0db65bf0b578d83f129f9a4204cc63644
const express = require('express');
const router = express.Router();

router.get(`/`, async (req,res)=>{
    const userList = await User.find();

    if (!orderList){
        res.status(500).json({success: false})
    }
    res.send(orderList);
})
module.exports = router;

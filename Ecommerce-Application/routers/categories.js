<<<<<<< HEAD
const {Category}= require('../models/category')                  
=======
const{Category}= require('..models/category');                    
>>>>>>> 92f579e0db65bf0b578d83f129f9a4204cc63644
const express = require('express');
const router = express.Router();

router.get(`/`, async (req,res)=>{
    const categoryList = await Category.find();

    if (!categoryList){
        res.status(500).json({success: false})
    }
    res.send(categoryList);
})
module.exports = router;

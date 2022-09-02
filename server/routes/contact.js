const { request } = require('express');
const express = require('express');
const router = express.Router();

const Contact=require('../models/Contact')

router.post('/contact',async(req,res)=>{
    const contact = new Contact(req.body);
    await contact.save();
    res.json({
        status:"Contact saved!"
    });
})

module.exports = router;
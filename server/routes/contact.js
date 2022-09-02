const { request } = require('express');
const express = require('express');
const router = express.Router();

const Contact=require('../models/Contact')

router.get('/contact',async(req,res)=>{
    const contacts = await Contact.find();
    res.json(contacts);
})

router.post('/contact',async(req,res)=>{
    const{name, email, message}=req.body
    const contact = new Contact({name,email,message});
    await contact.save();
    res.json(contact)
})



module.exports = router;
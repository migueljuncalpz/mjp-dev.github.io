const { request } = require('express');
const express = require('express');
const router = express.Router();

const Contact=require('../models/Contact')

router.get('/',async(req,res)=>{
    const Contacts = await Contact.find();
    res.json(Contacts);
})

module.exports = router;
const mongoose = require('mongoose');
const {Schema} = mongoose;

const Contact =new Schema({
    name:{
        type:'String',
        required:'true'
    },
    email:{
        type:'String',
        required:'true'
    },
    message:{
        type:'String',
        required:'true'
    },
})

module.exports =mongoose.model('Contact',Contact)
const mongoose = require('mongoose');
const {Schema} = mongoose;

const Project =new Schema({
    name:{
        type:'String',
        required:'true'
    },
    description:{
        type:'String',
        required:'true'
    },
    technology:{
        type:'String',
        required:'true'
    },
    img_url:{
        type:'String',
        required:'true'
    },      
    github_url:{
        type:'String',
        required:'true'
    }
})

module.exports =mongoose.model('Project',Project)
const { request } = require('express');
const express = require('express');
const router = express.Router();

const Project=require('../models/Project')

router.get('/projects',async(req,res)=>{
    const Projects = await Project.find();
    res.json(Projects);
})
router.post('/projects',async(req,res)=>{
    const project = new Project(req.body)
    await project.save();
    res.json({
        "status":"Project saved!"
    });
})

router.put('/projects/:id', async(req,res)=>{
    await Project.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        status:'Project updated!'
    })
})
router.delete('/projects/:id',async(req,res)=>{
    await Project.findByIdAndDelete(req.params.id);
    res.json({
        status:'Project deleted!'
    });
})

module.exports = router;
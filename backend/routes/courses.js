const express = require('express');
const Project = require('../models/project');
const router = express.Router();

router.post("", (req, res, next) => {
    const course = new Project({
      title: req.body.title,
      projectDescription: req.body.projectDescription,
      assigne: req.body.assigne,
      createdOn: req.body.createdOn
    });
    //console.log(course);
    post.save().then(createdPost => {
      console.log(result);
    });
    res.status(201).json({
      message: 'Post Added successfully',
      postId: createdPost._id
    });
    //next();  
  });
  
  router.put("/:id", (req, res, next) => {
    const course = new Project({
      _id: req.body.id,
      projectId: req.body.projectId,
      title: req.body.title,
      projectDescription: req.body.projectDescription,
      assigne: req.body.assigne,
      createdOn: req.body.createdOn
    });
    Project.updateOne({_id: req.params.id}, course).then(
      result => {
        console.log(result);
        res.status(200).json({message: `Updated successfully!!`});
      }
    );
  });
  
  router.get("", (req, res) => {
    //const courses = [];
    Project.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Posts fetched successfully",
        courses: documents.map() 
      })
    })
    .catch();
  });
  
  router.get("/:id", (req, res, next) => {
    Project.findById(req.params.id).then(course => {
      if(course){
        res.status(200).json(course);
      } else {
        res.status(404).json({message: `Post not found!!`});
      }
    })
  });
  
  router.delete("/:id", (req, res) => {
    Project.deleteOne({_id: req.params.id}).then(result => {
      console.log(result);
      console.log(req.params.id);
      res.status(200).json({
      message: `Post Deleted!!`
    });
    });
  });

  module.exports = router;
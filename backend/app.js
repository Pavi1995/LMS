const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Project = require('./models/project');
mongoose.connect("mongodb+srv://Pavithran:1Mo4GYJr1cVFpbBL@cluster0-e51ly.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch(() => {
    console.log(`Connection failed`);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

//mongoDB password : 1Mo4GYJr1cVFpbBL

app.use((req, resp, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

//mongodb+srv://Pavithran:<password>@cluster0-e51ly.mongodb.net/test?retryWrites=true&w=majority

app.post("/api/coursepost", (req, res, next) => {
  const course = new Project({
    title: req.body.title,
    projectDescription: req.body.projectDescription,
    assigne: req.body.assigne,
    createdOn: req.body.createdOn
  });
  console.log(course);
  res.status(201).json({
    message: 'Post Added successfully'
  });
  //next();  
});

app.use("/api/login", (req, resp, next) => {
  const login = [{}];
  res.status(200).json();
});

app.use("/api/courses", (req, resp, next) => {
  const courses = [];
  res.status().json({
    message: '',
    courses: courses
  });
})

module.exports = app;

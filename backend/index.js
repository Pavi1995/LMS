var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/EmployeeDB";
const apps = require("./backend/app");

var app = require("express")();
var cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
//var sqlite = require('sqlite3').verbose();
//var db = new sqlite.Database('./courseData');

app.use(cors());
app.use(bodyParser());
app.use(cookieParser());

function validateUser(emailId, pwd) {
  mongoClient.connect(url, function(err, db) {
    if (err) console.log(`Connection failed`);
    else {
      var users = db.Ims.find({ emailId: 1, pwd: 1, "": 0 });
      var status = false;
      for (let user of users) {
        if (user.emailId == emailId && user.pwd == pwd) {
          status = true;
          break;
        }
      }
      return status;
    }
  });
}

app.post("/login", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var user = { emailId: "", pwd: "" };
    user.emailId = req.body["email"];
    user.pwd = req.body["password"];
    console.log(validateUser(user.emailId, user.pwd));
    if (validateUser(user.emailId, user.pwd)) {
      resp.cookie("uname", user.emailId);
      resp.redirect();
    } else {
      console.log(`Invalid Credentials`);
    }
  });
});

app.post("/register", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var usernames = db.Ims.find({ uname: 1, "": 0 });
    var user = { uname: "", type: "", emailId: "", pwd: "" };
    user.uname = req.body["uname"];
    user.type = req.body["type"];
    user.emailId = req.body["email"];
    user.pwd = req.body["password"];
    for (let userss of usernames) {
      if (userss == user.uname) console.log(`User Already Exists`);
      else {
        db.Ims.insert({
          uname: user.uname,
          type: user.type,
          emailId: user.emailId,
          pwd: user.pwd
        });
        console.log(`User Added Succesfully`);
      }
    }
  });
});

app.get("/registerDashboard", (req, resp) => {
  var msg = "";
  if (req.cookies.uname != null) {
    var uname = req.cookies.uname;
    mongoClient.connect(url, function(err, db) {
      var usernames = db.Ims.findOne({ uname: uname }, function(err, row) {
        var user = { uname: "", type: "", emailId: "", pwd: "" };

        if (!err) resp.render();
        else resp.render();
      });
    });
  }
});

app.post("/createcourse", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var usernames = db.Ims.find({ uname: 1, "": 0 });
    var user = {
      uname: "",
      category: "",
      oneLiner: "",
      duration: "",
      language: "",
      description: "",
      lessons: "",
      photo: ""
    };
    user.uname = req.body["uname"];
    user.category = req.body["category"];
    user.oneLiner = req.body["oneLiner"];
    user.duration = req.body["duration"];
    user.language = req.body["language"];
    user.description = req.body["description"];
    user.lessons = req.body["lessons"];
    user.photo = req.body["body"];
    for (let userss of usernames) {
      if (userss == user.uname) {
        console.log(`User Already Exists`);
      } else {
        db.Ims.insert({
          uname: user.uname,
          category: user.category,
          oneLiner: user.oneLiner,
          duration: user.duration,
          language: user.language,
          description: user.description,
          lessons: user.lessons,
          photo: user.photo
        });
        console.log(`User Added Succesfully`);
      }
    }
  });
});

app.post("updatecourse", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var user = { uname: "" };
    user.uname = req.body["uname"];

    db.Ims.update(
      { uname: user.uname },
      { $set: { category: user.category } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { oneLiner: user.oneLiner } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { duration: user.duration } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { language: user.language } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { description: user.description } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { lessons: user.lessons } },
      { upsert: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { photo: user.photo } },
      { upsert: true }
    );
    console.log(`Updated record`);
  });
});

app.delete("/deletecourse", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var user = { uname: "" };
    user.uname = req.body["uname"];
    db.Ims.remove({ uname: user.uname });
  });
});

app.post("/editprofile", (req, resp) => {
  mongoClient.connect(url, function(err, db) {
    var user = { uname: "", emailId: "", pwd: "", rstpwd: "" };
    user.uname = req.body["uname"];
    user.emailId = req.body["email"];
    user.pwd = req.body["password"];
    user.rstpwd = req.body["restpassword"];
    db.Ims.update(
      { uname: user.uname },
      { $set: { emailId: user.emailId } },
      { multi: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { pwd: user.pwd } },
      { multi: true }
    );
    db.Ims.update(
      { uname: user.uname },
      { $set: { rstpwd: user.rstpwd } },
      { multi: true }
    );
  });
});

app.listen(9001, () => console.log(`API method listening...`));

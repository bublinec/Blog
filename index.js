// SETUP
// * include packages
const bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      express = require("express"),
      app = express();

// * configure express
// set view engine (so we don't have to include .ejs all the time)
app.set("view engine", "ejs");
// inlcude public dir in express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// * configure mongo db usnig mongoose
mongoose.connect("mongodb://localhost/blog", {useNewUrlParser: true,useUnifiedTopology: true});

// * setup the server
const port = 8000;
app.listen(port, function(err){
    if(err){
        console.log("Something went wrong: ", err);
    }
    else{
        console.log("Server listening on the port: ", port);
        
    }
});


// MONGOOSE SCHEMA + MODEL
var blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: {type: Date, default: Date.now},
    img_url: {type: String, default: "public/img/default_img.png"}
});
var Blog = mongoose.model("Blog", blogSchema);


// RESTful ROUTES
// * index - /blogs
app.get("/blogs", function(req, res){
    res.render("index");
});
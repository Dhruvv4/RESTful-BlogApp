// Essential imports
var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


var app = express();

mongoose.connect("mongodb://localhost/restful_blog_app");

// Setting the view engine to 'ejs' files
app.set('view engine', 'ejs');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

// ================================
//              SCHEMA
// ================================
var blogScheme = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogScheme);

// ================================
//              RESTFUL ROUTES
// ================================

app.get('/', (req, res) => {
    res.redirect("blogs");
});

// INDEX ROUTE
app.get('/blogs', (req, res) => {
    Blog.find({}, function(err, retrievedBlogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {blogs: retrievedBlogs});
        }
    })
});

// NEW ROUTE
app.get('/blogs/new', (req, res) => {
    res.render("new");
});

app.listen(3000, () => {
    console.log('RESTful BlogApp successfully started...');
});
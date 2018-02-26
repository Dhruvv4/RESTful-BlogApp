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

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => {
    console.log('RESTful BlogApp successfully started...');
});
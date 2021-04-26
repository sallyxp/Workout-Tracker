var db = require("../models");
var Workout = db.Workout;

var path = require("path");

// connect to middleware

module.exports = function(app){
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "public/index.html"));
    });
}
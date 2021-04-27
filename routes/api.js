var db = require("../models");
var Workout = db.Workout;

var path = require("path");

// connect to middleware

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .sort({ "day": "desc" })
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
        )
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        Workout.find({}).then(data => {
            res.json(data);
        })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body).then(function (dbPost) {
            res.json(dbPost);
        })
            .catch(err => {
                res.json(err);
            });
    });
}
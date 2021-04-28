
const router = require("express").Router();
var db = require("../models");
var Workout = db.Workout;


var path = require("path");

// connect to middleware


//get all workouts
router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ "day": "desc" })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

//update an existing exercise
router.put("/api/workouts/:id", (req, res) => {
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

router.get("/api/workouts/range", function (req, res) {
    Workout.find({}).then(data => {
        res.json(data);
    })
        .catch(err => {
            res.json(err);
        });
});


//  POST create a new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(data => {
        console.log("data", data);
        res.json(data);
    })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: []
})

//the model will be named Workout
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


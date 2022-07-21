const express = require("express");

const router = express.Router();

const {createWorkout,getWorkout,getWorkouts, deleteWorkout, updateWorkout}= require("../controllers/workoutController")

// GET all workouts
router.get("/", getWorkouts);

// GET a new request from WORKOUT

router.get("/:id", getWorkout);

// POSTE a new request WORKOUT
router.post("/", createWorkout);

// UPDATE a new request WORKOUTs

router.patch("/:id", updateWorkout);

// DELETE  a new request

router.delete("/:id", deleteWorkout);

module.exports = router;

import express from "express";
import {
    getWorkouts,
    createWorkout,
    getWorkout,
    updateWorkout,
    deleteWorkout,
} from "../controllers/WorkoutController.js";

const router = express.Router();

// ? GET all workouts
router.get("/", getWorkouts);

// ? POST a new workout
router.post("/", createWorkout);

// ? GET a single workout
router.get("/:id", getWorkout);

// ? UPDATE a workout
router.patch("/:id", updateWorkout);

// ? DELETE a workout
router.delete("/:id", deleteWorkout);

export default router;

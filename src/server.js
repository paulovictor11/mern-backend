import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";

dotenv.config();

// ? express app
const app = express();

// ? middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// ? routes
app.use("/api/workouts", workoutRoutes);

// ? database
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        // ? listen for requests
        app.listen(process.env.APP_PORT, () => {
            console.log("connected to database & listening on port 3333");
        });
    })
    .catch((error) => {
        console.log(error);
    });

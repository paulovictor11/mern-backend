import express from "express";

// ? express app
const app = express();

// ? routes
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the app",
    });
});

// ? listen for requests
app.listen(3333, () => {
    console.log("listening on port 3333");
});

import User from "../model/User";
import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
    const user: User = req.body;
    if (user.username === "admin" && user.password === "admin") {
        res.status(200).json({message: "Login successful"});
    } else {
        res.status(401).json({message: "Invalid credentials"});
    }
});

router.post("/register", async (req, res) => {
    const user = req.body;
    res.status(201).json(user);
});
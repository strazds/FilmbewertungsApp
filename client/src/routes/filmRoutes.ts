import express from "express";
import Film from "../models/Film";

const router = express.Router();

// Get all films
router.get("/", async (req, res) => {
  try {
    const films = await Film.find().populate("actors");
    res.json(films);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new film
router.post("/", async (req, res) => {
  try {
    const newFilm = new Film(req.body);
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Update a film
router.put("/:id", async (req, res) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedFilm);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Delete a film
router.delete("/:id", async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.id);
    res.json({ message: "Film deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

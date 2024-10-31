import express from "express";
import Actor from "../models/Actor";

const router = express.Router();

// Get all actors
router.get("/", async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new actor
router.post("/", async (req, res) => {
  try {
    const newActor = new Actor(req.body);
    const savedActor = await newActor.save();
    res.status(201).json(savedActor);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Update an actor
router.put("/:id", async (req, res) => {
  try {
    const updatedActor = await Actor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedActor);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

// Delete an actor
router.delete("/:id", async (req, res) => {
  try {
    await Actor.findByIdAndDelete(req.params.id);
    res.json({ message: "Actor deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

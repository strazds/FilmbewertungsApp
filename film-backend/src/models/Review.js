const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, "Please provide a rating"],
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot exceed 5"],
  },
  content: {
    type: String,
    maxlength: [2000, "Review too long"],
  },
  film: {
    type: mongoose.Schema.ObjectId,
    ref: "Film",
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", ReviewSchema);

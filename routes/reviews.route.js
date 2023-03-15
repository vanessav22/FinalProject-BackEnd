const router = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
const Review = require("../models/Review.model");

// Reviews routes

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Charity = require("../models/Charity.model");

// Create a new review
router.post("/reviews", async (req, res) => {
  try {
    const { rating, userComment, userId, charityId } = req.body;
    const newReview = await Review.create({ userId, userComment, rating });
    await Charity.findByIdAndUpdate(charityId, {
      $push: { reviews: newReview._id },
    });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get all reviews
router.get("/reviews", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.payload._id);
    const reviews = await Review.find({});
    res.send(reviews, user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get reviews for a specific charity
router.get("/reviews/:charityId", async (req, res) => {
  try {
    const reviews = await Review.find({ charityId: req.params.charityId });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete-review/:reviewId/:charityId", async (req, res) => {
  const { reviewId, charityId } = req.params;
  try {
    const deleted = await Review.findByIdAndRemove(reviewId);

    const updateCharity = await Charity.findByIdAndUpdate(
      charityId,
      {
        $pull: { reviews: reviewId },
      },
      { new: true }
    );
    res.json(updateCharity);
  } catch (error) {
    res.status(400).json({ message: "Error deleting review" });
  }
});

module.exports = router;

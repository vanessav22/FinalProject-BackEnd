const router = require('express').Router();
const mongoose = require('mongoose');

const Review = require('../models/Review.model');

// Reviews routes

// Get all reviews
router.get('/reviews', async (req, res) => {
    try {
      const reviews = await Review.find().populate('user', 'name');
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Create a new review
  router.post('/reviews', async (req, res) => {
    const review = new Review({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user
    });
  
    try {
      const newReview = await review.save();
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  module.exports = router;
  
const router = require('express').Router();
const mongoose = require('mongoose');
const express = require('express');
const Review = require('../models/Review.model');

// Reviews routes

const { isAuthenticated } = require("../middleware/jwt.middleware.js");

// Create a new review
router.post('/reviews', async (req, res) => {
  try {
    const {rating, userComment, userId} = req.body;
   const review = await Review.create({userId, userComment, rating});
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all reviews
router.get('/reviews', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.payload._id)
    const reviews = await Review.find({});
    res.send(reviews, user );
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get reviews for a specific charity
router.get('/reviews/:charityId', async (req, res) => {
  try {
    const reviews = await Review.find({ charityId: req.params.charityId });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});
  module.exports = router;
  
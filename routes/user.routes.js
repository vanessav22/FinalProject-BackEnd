const router = require("express").Router();
const mongoose = require("mongoose");
const Charity = require("../models/Charity.model");
const User = require("../models/User.model");

// User routes

//Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users
router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);

    if (!users) {
      const charity = await Charity.findById(id);
      res.json(charity);
    } else {
      res.json(users);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new user
/*   router.post('/users', async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }); */

module.exports = router;

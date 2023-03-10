const router = require('express').Router();
const mongoose = require('mongoose');

const Charity = require('../models/Charity.model');

// Read (all)
router.get("/charities", async (req, res) => {
  try {
    const charities = await Charity.find();
    res.json(charities);
  } catch (error) {
    res.status(400).json({ message: "Error retrieving charities" });
  }
});

// Read (by id)
router.get("/charities/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const charity = await Charity.findById(id);
    if (!charity) {
      res.status(404).json({ message: "Charity not found" });
    } else {
      res.json(charity);
    }
  } catch (error) {
    res.status(400).json({ message: "Error retrieving charity" });
  }
});

// Update
router.put("/charities/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password, name, typeofCharity, urgencyNumber, image, description, UrlLink} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid charity id" });
    return;
  }

  try {
    const updatedCharity = await Charity.findByIdAndUpdate(
      id,
      { email, name, typeofCharity, urgencyNumber, image, description, UrlLink},
      { new: true }
    );
    if (!updatedCharity) {
      res.status(404).json({ message: "Charity not found" });
    } else {
      res.json(updatedCharity);
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating charity" });
  }
});

// Delete
router.delete("/charities/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Invalid charity id" });
    return;
  }

  try {
    const deletedCharity = await Charity.findByIdAndRemove(id);
    if (!deletedCharity) {
      res.status(404).json({ message: "Charity not found" });
    } else {
      res.json({ message: "Charity deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error deleting charity" });
  }
});

module.exports = router;

// routes/transactions.js
const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transactions");
const User = require("../models/User");

// Add a transaction
router.post("/", async (req, res) => {
  const { userId, type, category, amount, description, linkedAccount } = req.body;

  try {
    const transaction = await Transaction.create({
      user: userId,
      type,
      category,
      amount,
      description,
      linkedAccount,
    });

    // Push transaction reference to user
    await User.findByIdAndUpdate(userId, { $push: { transactions: transaction._id } });

    res.json({ success: true, transaction });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all transactions of a user
router.get("/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.params.userId }).populate("linkedAccount");
    res.json({ success: true, transactions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

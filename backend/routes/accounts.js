// routes/accounts.js
const express = require("express");
const router = express.Router();
const Account = require("../models/Account");
const User = require("../models/User");

// Create/Link new account
router.post("/", async (req, res) => {
  const { userId, type, name, accountNumber, balance, currency, details } = req.body;

  try {
    const account = await Account.create({ user: userId, type, name, accountNumber, balance, currency, details });

    // Push account reference to user
    await User.findByIdAndUpdate(userId, { $push: { accounts: account._id } });

    res.json({ success: true, account });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get all accounts of a user
router.get("/:userId", async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.params.userId });
    res.json({ success: true, accounts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;

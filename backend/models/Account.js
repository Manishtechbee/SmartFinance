// models/Account.js
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["bank", "credit_card", "loan", "investment"], required: true },
    name: { type: String, required: true }, // Bank name, card name etc
    accountNumber: { type: String },
    balance: { type: Number, default: 0 },
    currency: { type: String, default: "INR" },
    details: { type: Object }, // store metadata like card expiry, loan tenure etc
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);

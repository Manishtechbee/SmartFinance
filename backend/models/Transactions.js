// models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
    linkedAccount: { type: mongoose.Schema.Types.ObjectId, ref: "Account" }, // bank, credit card etc
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);

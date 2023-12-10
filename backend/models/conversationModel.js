const mongoose = require("mongoose");

const convSchema = new mongoose.Schema(
  {
    participants: [
      {
        userId: { type: String, required: true },
        username: {
          type: String,
          required: true,
        },
      },
    ],
    messages: [
      {
        senderId: {
          type: String,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const convModel = mongoose.model("conv", convSchema);

module.exports = convModel;

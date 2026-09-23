const mongoose = require("mongoose");

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        "Please provide a valid email address",
      ],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      maxlength: [3000, "Message cannot exceed 3000 characters"],
    },
    ipAddress: {
      type: String,
      default: "127.0.0.1",
    },
    status: {
      type: String,
      enum: ["unread", "read", "archived"],
      default: "unread",
    },
  },
  {
    timestamps: true,
  }
);

// Fallback in-memory store if MongoDB is offline during local evaluation
const memoryStore = [];

contactMessageSchema.statics.saveFallback = function (data) {
  const record = {
    _id: "mem_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
    ...data,
    status: "unread",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  memoryStore.push(record);
  return record;
};

contactMessageSchema.statics.getFallbackMessages = function () {
  return [...memoryStore];
};

module.exports = mongoose.model("ContactMessage", contactMessageSchema);

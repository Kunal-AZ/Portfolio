const ContactMessage = require("../models/ContactMessage");
const { getDBStatus } = require("../config/db");
const { sendContactNotification } = require("../services/emailService");

// @desc    Submit a new contact message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;
    const ipAddress =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "127.0.0.1";

    const payload = {
      name,
      email,
      subject,
      message,
      ipAddress,
    };

    let savedRecord = null;
    const dbStatus = getDBStatus();

    if (dbStatus.connected) {
      savedRecord = await ContactMessage.create(payload);
    } else {
      // In-memory fallback if MongoDB connection is pending or in offline demo mode
      savedRecord = ContactMessage.saveFallback(payload);
    }

    // Return instant HTTP 201 response to user (instant UI feedback, < 200ms)
    res.status(201).json({
      success: true,
      message: "Thank you for reaching out, Kunal has received your message and will respond promptly.",
      data: {
        id: savedRecord._id,
        name: savedRecord.name,
        subject: savedRecord.subject,
        createdAt: savedRecord.createdAt,
      },
    });

    // Asynchronously dispatch email notification in background (non-blocking)
    setImmediate(() => {
      sendContactNotification(payload).catch((err) => {
        console.error("[Background Email Notification Error]:", err.message);
      });
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (Internal/Testing)
// @route   GET /api/contact
// @access  Internal
const getMessages = async (req, res, next) => {
  try {
    const dbStatus = getDBStatus();
    let messages = [];

    if (dbStatus.connected) {
      messages = await ContactMessage.find().sort({ createdAt: -1 });
    } else {
      messages = ContactMessage.getFallbackMessages();
    }

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, getMessages };
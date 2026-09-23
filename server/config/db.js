const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "[Database Warning] MONGODB_URI is not defined in environment variables. Falling back to local offline memory storage."
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`[Database Error] Connection failed: ${error.message}`);
    console.warn(
      "[Database Fallback] Server will remain operational with in-memory persistence fallback for messages."
    );
    isConnected = false;
    return false;
  }
};

const getDBStatus = () => {
  return {
    connected: isConnected || mongoose.connection.readyState === 1,
    readyState: mongoose.connection.readyState,
  };
};

module.exports = { connectDB, getDBStatus };

require("dotenv").config();
const app = require("./app");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0"; // Listen on all network interfaces

// Initialize database and start HTTP server
const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, HOST, () => {
    console.log(`===============================================`);
    console.log(`🚀 Portfolio Backend running on http://localhost:${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`📁 Projects API: http://localhost:${PORT}/api/projects`);
    console.log(`📬 Contact API:  POST http://localhost:${PORT}/api/contact`);
    console.log(`===============================================`);
  });

  // Graceful shutdown handling
  const handleShutdown = (signal) => {
    console.log(`\n[Process] Received ${signal}. Gracefully terminating server...`);
    server.close(() => {
      console.log("[Process] HTTP server closed.");
      process.exit(0);
    });
  };

  process.on("SIGINT", () => handleShutdown("SIGINT"));
  process.on("SIGTERM", () => handleShutdown("SIGTERM"));
};

startServer();
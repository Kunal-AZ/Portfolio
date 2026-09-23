const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const healthRoutes = require("./routes/healthRoutes");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const { errorHandler, notFound } = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");

const app = express();

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows flexible client integration
  })
);

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin || allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== "production") {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS policy"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Logging
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

// Body parsing with safe size limits
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

// General Rate Limiting
app.use("/api", generalLimiter);

// API Route Mounts
app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Kunal Sharma Portfolio API is running smoothly.",
    documentation: {
      health: "/api/health",
      projects: "/api/projects",
      contact: "POST /api/contact",
    },
  });
});

// 404 & Global Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;

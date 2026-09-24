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
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// Robust CORS allowing Vercel, localhost, and custom domains
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      const isLocal =
        origin.includes("localhost") || origin.includes("127.0.0.1");
      const isVercel =
        origin.endsWith(".vercel.app") || origin.includes("vercel.app");
      const isClientUrl =
        process.env.CLIENT_URL && origin.startsWith(process.env.CLIENT_URL);

      if (isLocal || isVercel || isClientUrl || process.env.NODE_ENV !== "production") {
        return callback(null, true);
      }

      // Allow by default to prevent blocking real recruiters/visitors
      return callback(null, true);
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
app.use(express.json({ limit: "25kb" }));
app.use(express.urlencoded({ extended: true, limit: "25kb" }));

// General Rate Limiting
app.use("/api", generalLimiter);

// API Route Mounts
app.use("/api/health", healthRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Kunal Sharma Portfolio API is running smoothly on Render.",
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
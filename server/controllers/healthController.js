const { getDBStatus } = require("../config/db");

const getHealth = (req, res) => {
  const dbStatus = getDBStatus();

  res.status(200).json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
    database: {
      status: dbStatus.connected ? "connected" : "offline / in-memory fallback",
      readyState: dbStatus.readyState,
    },
    service: "Kunal Sharma Portfolio API",
    version: "1.0.0",
  });
};

module.exports = { getHealth };

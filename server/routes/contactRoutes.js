const express = require("express");
const router = express.Router();
const { submitContact, getMessages } = require("../controllers/contactController");
const { validateContactInput } = require("../middleware/validation");
const { contactLimiter } = require("../middleware/rateLimiter");

router.post("/", contactLimiter, validateContactInput, submitContact);
router.get("/", getMessages);

module.exports = router;

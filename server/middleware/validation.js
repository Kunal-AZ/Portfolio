const sanitizeString = (str) => {
  if (typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "") // basic anti-XSS strip
    .trim();
};

const validateContactInput = (req, res, next) => {
  let { name, email, subject, message } = req.body;

  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push("Please provide your name.");
  } else if (name.trim().length > 100) {
    errors.push("Name cannot exceed 100 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
    errors.push("Please provide a valid email address.");
  }

  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    errors.push("Please provide a subject.");
  } else if (subject.trim().length > 200) {
    errors.push("Subject cannot exceed 200 characters.");
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    errors.push("Please provide a message.");
  } else if (message.trim().length > 3000) {
    errors.push("Message cannot exceed 3000 characters.");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  // Clean sanitized fields onto req.body
  req.body.name = sanitizeString(name);
  req.body.email = email.trim().toLowerCase();
  req.body.subject = sanitizeString(subject);
  req.body.message = sanitizeString(message);

  next();
};

module.exports = { validateContactInput };

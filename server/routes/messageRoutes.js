const express = require("express");

const {
  getMessages,
  getMessageById,
  createMessage,
  updateMessageStatus,
  deleteMessage,
} = require("../controllers/messageController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ===============================
// PUBLIC ROUTE
// ===============================

// Contact form se message bhejna
router.post("/", createMessage);

// ===============================
// PROTECTED ADMIN ROUTES
// ===============================

// Saare messages
router.get("/", protect, getMessages);

// Single message
router.get("/:id", protect, getMessageById);

// Read / Unread status update
router.put("/:id", protect, updateMessageStatus);

// Message delete
router.delete("/:id", protect, deleteMessage);

module.exports = router;
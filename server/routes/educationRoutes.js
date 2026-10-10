const express = require("express");

const {
  getEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getEducations);
router.get("/:id", getEducationById);

// Protected admin routes
router.post("/", protect, createEducation);
router.put("/:id", protect, updateEducation);
router.delete("/:id", protect, deleteEducation);

module.exports = router;
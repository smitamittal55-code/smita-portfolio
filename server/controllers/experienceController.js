const Experience = require("../models/Experience");

// ===============================
// GET ALL EXPERIENCES
// ===============================
const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: experiences.length,
      experiences,
    });
  } catch (error) {
    console.error("Get Experiences Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch experiences",
    });
  }
};

// ===============================
// GET SINGLE EXPERIENCE
// ===============================
const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    res.status(200).json({
      success: true,
      experience,
    });
  } catch (error) {
    console.error("Get Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch experience",
    });
  }
};

// ===============================
// CREATE EXPERIENCE
// ===============================
const createExperience = async (req, res) => {
  try {
    const {
      jobTitle,
      company,
      location,
      employmentType,
      startDate,
      endDate,
      currentlyWorking,
      description,
    } = req.body;

    if (!jobTitle || !company || !startDate) {
      return res.status(400).json({
        success: false,
        message: "Job title, company and start date are required",
      });
    }

    const experience = await Experience.create({
      jobTitle,
      company,
      location,
      employmentType,
      startDate,
      endDate: currentlyWorking ? "" : endDate,
      currentlyWorking:
        currentlyWorking === true || currentlyWorking === "true",
      description,
    });

    res.status(201).json({
      success: true,
      message: "Experience created successfully",
      experience,
    });
  } catch (error) {
    console.error("Create Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create experience",
    });
  }
};

// ===============================
// UPDATE EXPERIENCE
// ===============================
const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    const {
      jobTitle,
      company,
      location,
      employmentType,
      startDate,
      endDate,
      currentlyWorking,
      description,
    } = req.body;

    experience.jobTitle = jobTitle ?? experience.jobTitle;
    experience.company = company ?? experience.company;
    experience.location = location ?? experience.location;
    experience.employmentType =
      employmentType ?? experience.employmentType;
    experience.startDate = startDate ?? experience.startDate;
    experience.description = description ?? experience.description;

    if (currentlyWorking !== undefined) {
      experience.currentlyWorking =
        currentlyWorking === true || currentlyWorking === "true";
    }

    if (experience.currentlyWorking) {
      experience.endDate = "";
    } else if (endDate !== undefined) {
      experience.endDate = endDate;
    }

    const updatedExperience = await experience.save();

    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
      experience: updatedExperience,
    });
  } catch (error) {
    console.error("Update Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update experience",
    });
  }
};

// ===============================
// DELETE EXPERIENCE
// ===============================
const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: "Experience not found",
      });
    }

    await experience.deleteOne();

    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.error("Delete Experience Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete experience",
    });
  }
};

module.exports = {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience,
};
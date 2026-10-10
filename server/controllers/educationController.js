const Education = require("../models/Education");

// ===============================
// GET ALL EDUCATION
// ===============================
const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: educations.length,
      educations,
    });
  } catch (error) {
    console.error("Get Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch education",
    });
  }
};

// ===============================
// GET SINGLE EDUCATION
// ===============================
const getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      education,
    });
  } catch (error) {
    console.error("Get Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch education",
    });
  }
};

// ===============================
// CREATE EDUCATION
// ===============================
const createEducation = async (req, res) => {
  try {
    const {
      degree,
      institution,
      location,
      startYear,
      endYear,
      percentage,
      description,
    } = req.body;

    if (!degree || !institution) {
      return res.status(400).json({
        success: false,
        message: "Degree and institution are required",
      });
    }

    const education = await Education.create({
      degree,
      institution,
      location,
      startYear,
      endYear,
      percentage,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Education created successfully",
      education,
    });
  } catch (error) {
    console.error("Create Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create education",
    });
  }
};

// ===============================
// UPDATE EDUCATION
// ===============================
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    const {
      degree,
      institution,
      location,
      startYear,
      endYear,
      percentage,
      description,
    } = req.body;

    education.degree = degree ?? education.degree;
    education.institution = institution ?? education.institution;
    education.location = location ?? education.location;
    education.startYear = startYear ?? education.startYear;
    education.endYear = endYear ?? education.endYear;
    education.percentage = percentage ?? education.percentage;
    education.description = description ?? education.description;

    const updatedEducation = await education.save();

    res.status(200).json({
      success: true,
      message: "Education updated successfully",
      education: updatedEducation,
    });
  } catch (error) {
    console.error("Update Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update education",
    });
  }
};

// ===============================
// DELETE EDUCATION
// ===============================
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    await education.deleteOne();

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    console.error("Delete Education Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete education",
    });
  }
};

module.exports = {
  getEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
};
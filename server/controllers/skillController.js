const Skill = require("../models/Skill");

// ===============================
// GET ALL SKILLS
// ===============================
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: skills.length,
      skills,
    });
  } catch (error) {
    console.error("Get Skills Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch skills",
    });
  }
};

// ===============================
// GET SINGLE SKILL
// ===============================
const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      skill,
    });
  } catch (error) {
    console.error("Get Skill Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch skill",
    });
  }
};

// ===============================
// CREATE SKILL
// ===============================
const createSkill = async (req, res) => {
  try {
    const {
      name,
      category,
      level,
      percentage,
      icon,
      description,
    } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        success: false,
        message: "Skill name and category are required",
      });
    }

    const skill = await Skill.create({
      name,
      category,
      level,
      percentage:
        percentage !== undefined ? Number(percentage) : 0,
      icon,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Skill created successfully",
      skill,
    });
  } catch (error) {
    console.error("Create Skill Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create skill",
    });
  }
};

// ===============================
// UPDATE SKILL
// ===============================
const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    const {
      name,
      category,
      level,
      percentage,
      icon,
      description,
    } = req.body;

    skill.name = name ?? skill.name;
    skill.category = category ?? skill.category;
    skill.level = level ?? skill.level;

    if (percentage !== undefined) {
      skill.percentage = Number(percentage);
    }

    skill.icon = icon ?? skill.icon;
    skill.description = description ?? skill.description;

    const updatedSkill = await skill.save();

    res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      skill: updatedSkill,
    });
  } catch (error) {
    console.error("Update Skill Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update skill",
    });
  }
};

// ===============================
// DELETE SKILL
// ===============================
const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    await skill.deleteOne();

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    console.error("Delete Skill Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete skill",
    });
  }
};

module.exports = {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
const Project = require("../models/Project");

// ===============================
// GET ALL PROJECTS
// ===============================
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

// ===============================
// GET SINGLE PROJECT
// ===============================
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Get Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

// ===============================
// CREATE PROJECT
// ===============================
const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      image,
      liveUrl,
      githubUrl,
      technologies,
      featured,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      category,
      image,
      liveUrl,
      githubUrl,
      technologies: Array.isArray(technologies) ? technologies : [],
      featured: featured === true || featured === "true",
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error("Create Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

// ===============================
// UPDATE PROJECT
// ===============================
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const {
      title,
      description,
      category,
      image,
      liveUrl,
      githubUrl,
      technologies,
      featured,
    } = req.body;

    project.title = title ?? project.title;
    project.description = description ?? project.description;
    project.category = category ?? project.category;
    project.image = image ?? project.image;
    project.liveUrl = liveUrl ?? project.liveUrl;
    project.githubUrl = githubUrl ?? project.githubUrl;

    if (technologies !== undefined) {
      project.technologies = Array.isArray(technologies)
        ? technologies
        : project.technologies;
    }

    if (featured !== undefined) {
      project.featured = featured === true || featured === "true";
    }

    const updatedProject = await project.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    console.error("Update Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};

// ===============================
// DELETE PROJECT
// ===============================
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
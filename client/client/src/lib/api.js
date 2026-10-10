const API_URL = "http://localhost:5000/api";

export const api = {
  // =========================
  // AUTH
  // =========================

  login: async (data) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  // =========================
  // PROJECTS
  // =========================

  getProjects: async () => {
    const response = await fetch(`${API_URL}/projects`);
    return response.json();
  },

  getProjectById: async (id) => {
    const response = await fetch(`${API_URL}/projects/${id}`);
    return response.json();
  },

  createProject: async (data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateProject: async (id, data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteProject: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  // =========================
  // SKILLS
  // =========================

  getSkills: async () => {
    const response = await fetch(`${API_URL}/skills`);
    return response.json();
  },

  getSkillById: async (id) => {
    const response = await fetch(`${API_URL}/skills/${id}`);
    return response.json();
  },

  createSkill: async (data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/skills`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateSkill: async (id, data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/skills/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteSkill: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/skills/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  // =========================
  // EXPERIENCE
  // =========================

  getExperiences: async () => {
    const response = await fetch(`${API_URL}/experience`);
    return response.json();
  },

  getExperienceById: async (id) => {
    const response = await fetch(`${API_URL}/experience/${id}`);
    return response.json();
  },

  createExperience: async (data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/experience`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateExperience: async (id, data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/experience/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteExperience: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/experience/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  // =========================
  // EDUCATION
  // =========================

  getEducation: async () => {
    const response = await fetch(`${API_URL}/education`);
    return response.json();
  },

  getEducationById: async (id) => {
    const response = await fetch(`${API_URL}/education/${id}`);
    return response.json();
  },

  createEducation: async (data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/education`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateEducation: async (id, data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/education/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteEducation: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/education/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  // =========================
  // MESSAGES
  // =========================

  getMessages: async () => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/messages`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  getMessageById: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  sendMessage: async (data) => {
    const response = await fetch(`${API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  updateMessage: async (id, data) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/messages/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  deleteMessage: async (id) => {
    const token = localStorage.getItem("adminToken");

    const response = await fetch(`${API_URL}/messages/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },
};
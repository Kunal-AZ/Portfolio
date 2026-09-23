const projectsData = require("../data/projectsData");

// @desc    Get all portfolio projects
// @route   GET /api/projects
// @access  Public
const getProjects = (req, res) => {
  const { category, featured } = req.query;

  let filtered = [...projectsData];

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === "true") {
    filtered = filtered.filter((p) => p.featured === true);
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
};

// @desc    Get single project by ID
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = (req, res) => {
  const project = projectsData.find((p) => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: `Project with ID '${req.params.id}' not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: project,
  });
};

module.exports = { getProjects, getProjectById };

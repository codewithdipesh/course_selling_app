const { Router } = require('express');
const courseRouter = Router();
const { courseModel } = require('../db');


courseRouter.post('/purchase', (req, res) => {
  res.json({ message: "Course purchased successfully" });
});

courseRouter.get('/preview', (req, res) => {
  res.json({ message: "Course preview" });
});

module.exports = courseRouter; // ✅ export router


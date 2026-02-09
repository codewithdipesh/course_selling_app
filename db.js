const mongoose = require('mongoose');

// Admin schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const adminModel = mongoose.model('Admin', adminSchema);

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});
const userModel = mongoose.model('User', userSchema);

// Course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number
});
const courseModel = mongoose.model('Course', courseSchema);

module.exports = {
  adminModel,
  userModel,
  courseModel
};


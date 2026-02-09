const { Router } = require('express');
const userRouter = Router();
const { userModel} = require('../db');


userRouter.post('/signup', async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    const user = new userModel({
      email,
      password,
      firstname,
      lastname
    });

    await user.save();
    res.json({ message: "Signed up successfully" });
  } catch (error) {
    res.status(500).json({ error: "Signup failed", details: error.message });
  }
});

userRouter.get('/signin', (req, res) => {
  res.json({ message: "User signed in" });
});

userRouter.get('/purchased', (req, res) => {
  res.json({ message: "User purchased courses" });
});

module.exports = userRouter; // ✅ export router

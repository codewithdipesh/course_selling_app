const { Router } = require('express');
const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.json({ message: "signed up" });
});

userRouter.get('/signin', (req, res) => {
  res.json({ message: "User signed in" });
});

userRouter.get('/purchased', (req, res) => {
  res.json({ message: "User purchased courses" });
});

module.exports = userRouter; // ✅ export only the router

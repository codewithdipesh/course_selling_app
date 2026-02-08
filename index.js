const express = require('express');
const app = express();

const courseRouter = require('./routes/courseRouter');
const userRouter = require('./routes/user');

app.use(express.json());

// Mount routers
app.use('/user', userRouter);
app.use('/course', courseRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Selling API');
});

app.listen(3005, () => {
  console.log('Server running on port 3005');
});

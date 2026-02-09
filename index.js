const express = require('express');

const mongoose = require('mongoose');
const app = express();

const courseRouter = require('./routes/course');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use(express.json());

// Mount routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Course Selling API');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ✅ Wrap mongoose.connect in an async function
async function main() {
  try {
    await mongoose.connect(
        'mongodb+srv://abhinav:abhinavdwivedi@cluster0.uu44skr.mongodb.net/coursa?appName=Cluster0'

    );

    console.log('MongoDB connected successfully');

    app.listen(3005, () => {
      console.log('Server running on port 3005');
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}




main();

app.get('/example', async (req, res, next) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (err) {
    next(err); // Passes error to Express error handler
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


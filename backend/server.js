// server.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Ensure this path is correct
const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/glycogen', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/register', async (req, res) => {
  const { name, email, username, password } = req.body;
  
  // Basic validation
  if (!name || !email || !username || !password) {
    return res.status(400).send('All fields are required');
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  // Create new user
  const user = new User({ name, email, username, password });
  try {
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error creating account');
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
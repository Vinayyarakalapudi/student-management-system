const express = require('express');
const connectDB = require('./DB/ConnectToDB.js');
const studentRoutes = require('./Routes/StudentRoutes.js');
require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());

// CORS Configuration
const cors = require('cors');
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000', // Set your client URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Routes
app.use('/students', studentRoutes);

// Port Configuration
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

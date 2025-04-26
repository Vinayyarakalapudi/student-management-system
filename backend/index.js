const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/ConnectToDB');
const studentRoutes = require('./Routes/StudentRoutes');


const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type'],
};
const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connects to MongoDB

app.use('/students', studentRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

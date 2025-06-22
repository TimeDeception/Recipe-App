const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require('./routes/auth');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
//Route authentication setup
app.use('/api/auth', authRoutes);


const restrictAccess = require('./middleware/authMiddleware');
const isProduction = process.env.NODE_ENV === "production";

if (isProduction) {
  console.log("Running in production mode");
  // Disable dev-specific features like detailed logging
} else {
  console.log("Running in development mode");
}

// Allow only subscribers
app.get('/premium-recipes', restrictAccess(['subscriber']), (req, res) => {
  res.json({ message: 'Welcome to premium recipes!' });
});

// Connect to MongoDB
const mongoUri =
  process.env.MONGO_URI || "mongodb://localhost:27017/solarrecipes";

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

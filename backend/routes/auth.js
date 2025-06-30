const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// Registration endpoint
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "user already exists" });

    user = new User({ username, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ error: "Invalid credentials" });
    }
    let isMatch  = false;
    try {
      isMatch = await bcrypt.compare(password, user.password);
    }catch (bcryptErr){
      console.error("bcrypt.compare error:", bcryptErr);
      return res.status(500).json({ error: "Server error" });
    }
    if(!isMatch){
      console.log("Password mismatch for user:", email);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.error("JWT sign error:", err);
          return res.status(500).json({ error: "Server error" });
        };
        // Excludes password from the user object before sending response
        // mongoose's toObject() method is used to convert the Mongoose document to a plain JavaScript object
        const {password, ...userWithoutPassword} = user.toObject();
        console.log("Login successful for user:", email);
        res.json({ token, user: userWithoutPassword });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
  
});

router.get("/me", auth, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  });

//Get saved recipes
router.get("/saved", auth, async (req,res) => {
  const user = await User.findById(req.user.id)
  res.json({ savedRecipes: user.savedRecipes})
});
// Save a recipe
router.post("/save", auth, async (req, res)=> {
  try{
    const {recipeId} = req.body;
    const user = await User.findById(req.user.id)
    if(!user.savedRecipes.includes(recipeId)){
      user.savedRecipes.push(recipeId);
      await user.save();
    }
    res.json({ savedRecipes: user.savedRecipes});
  } catch (err) {
    console.error("Error saving recipe:", err);
    res.status(500).json({ error: "Server error" });
  }
});
// Remove a saved recipe
router.post("/unsave", auth, async (req, res) => {
  try{
    const { recipeId} = req.body;
    const user= await User.findById(req.user.id);
    user.savedRecipes= user.savedRecipes.filter(id=> id !== recipeId);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch(err){
    console.error("Error removing saved recipe:", err);
    res.status(500).json({ error: "Server error" });
  }
  
});

module.exports = router;

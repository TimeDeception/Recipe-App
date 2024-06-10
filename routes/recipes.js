const express = require("express");
const Recipe = require("../models/Recipe");
const auth = require("../middleware/auth");

const router = express.Router();

// Create a new recipe
router.post("/", auth, async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      intrusctions,
      author: req.user.id,
    });
    const recipe = await newRecipe.save();
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("author", ["username"]);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get a single recipe
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("author", [
      "username",
    ]);
    if (!recipe) return res.status(404).json({ msg: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
});

// Update a recipe
router.put("/:id", auth, async (req, res) => {
  const { title, ingredients, instructions } = req.body;
  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: "Recipe not found" });

    if (recipe.author.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized " });
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: { title, ingredients, instructions } },
      { new: true }
    );
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete a recipe
router.delete("/:id", auth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: "Recipe not found" });

    if (recipe.author.toString() !== req.params.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await recipe.remove();
    res.json({ msg: "Reci[e removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;

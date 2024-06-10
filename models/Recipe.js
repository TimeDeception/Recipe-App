const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  intrusctions: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Recipe", RecipeSchema);

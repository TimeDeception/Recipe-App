const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subStatus: {type: String, default: "free"},
  savedRecipes: [{type:String}], //Storesan array of recipe IDs
});

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require('mongoose');



// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const userModel = mongoose.model("users", userSchema)
// module.exports = userModel
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;



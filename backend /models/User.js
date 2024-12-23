const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    about: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    jobs: { type: Array },
    skills: { type: Array },
    extracurricular: { type: Array },
  });
  

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;

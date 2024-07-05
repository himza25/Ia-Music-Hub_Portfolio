const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String }, // Ajouter le champ de photo de profil
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

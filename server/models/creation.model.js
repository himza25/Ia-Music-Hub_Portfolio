const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const creationSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});

const Creation = mongoose.model('Creation', creationSchema);

module.exports = Creation;

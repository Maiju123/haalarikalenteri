const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const eventSchema = new Schema({
  title: { type: String, required: true },
  descripion:  { type: String },
  date: { type: String },
  time: { type: String },
  img:  { type: String },
  categories: { type: Array },
  key: { type: String }
});


module.exports = mongoose.model('Event', eventSchema);

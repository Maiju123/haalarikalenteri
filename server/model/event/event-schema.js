const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const eventSchema = new Schema({
  title: { type: String, required: true },
  description:  { type: String },
  date: { type: Date },
  time: { type: String },
  img:  { type: String },
  categories: { type: Array },
  key: { type: String }
});


module.exports = mongoose.model('Event', eventSchema);

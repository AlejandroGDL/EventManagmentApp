const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  Date: {
    type: Date,
    required: true,
    min: 6,
    max: 255,
  },
  Hour: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  Duration: {
    type: Number,
    required: true,
    min: 6,
    max: 255,
  },
  Place: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  Description: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  Image: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model('Event', eventSchema);

"use strict";

const mongoose = require('mongoose');

const _workoutSchema = {
  name: { type : String },
  date: { type: Date, default: Date.now },
  duration: [{
    hours: Number,
    minutes: Number
  }],
  calories: { type: Number },
  distance: { type: Number },
  heartrate: { type: String },
  zones: [{
    peak: Number,
    cardio: Number,
    fatburn: Number
  }],
}

module.exports = mongoose.Schema(_workoutSchema);

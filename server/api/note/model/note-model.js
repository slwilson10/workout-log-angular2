"use strict";

const mongoose = require('mongoose');

const _noteSchema = {
  title: { type : String },
  content: { type : String },
  color: { type: String }
}

module.exports = mongoose.Schema(_noteSchema);

"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const noteSchema = require('../model/note-model');
const _ = require('lodash');

noteSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Note
          .find(_query)
          .exec((err, notes) => {
              err ? reject(err)
                  : resolve(notes);
          });
      });
}

noteSchema.statics.createNote = (note) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(note))
          return reject(new TypeError('Note is not a valid object.'));

      let _note = new Note(note);

      _note.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

noteSchema.statics.deleteNote = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Note
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

const Note  = mongoose.model('Note', noteSchema);

module.exports = Note;

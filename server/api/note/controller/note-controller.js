"use strict";

const NoteDAO = require('../dao/note-dao');

module.exports = class NoteController {
  static getAll(req, res) {
      NoteDAO
        .getAll()
        .then(notes => res.status(200).json(notes))
        .catch(error => res.status(400).json(error));
  }

  static createNote(req, res) {
      let _note = req.body;

      NoteDAO
        .createNote(_note)
        .then(note => res.status(201).json(note))
        .catch(error => res.status(400).json(error));
  }

  static deleteNote(req, res) {
    let _id = req.params.id;

    NoteDAO
      .deleteNote(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

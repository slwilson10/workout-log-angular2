"use strict";

const NoteController = require('../controller/note-controller');

module.exports = class NoteRoutes {
    static init(router) {
      router
        .route('/api/note')
        .get(NoteController.getAll)
        .post(NoteController.createNote);

      router
        .route('/api/note/:id')
        .delete(NoteController.deleteNote);
    }
}

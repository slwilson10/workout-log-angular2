"use strict";

const NotesRoutes = require('../api/note/routes/note-routes');


module.exports = class Routes {
   static init(app, router) {
     NotesRoutes.init(router);


     app.use('/', router);
   }
}

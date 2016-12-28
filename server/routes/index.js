"use strict";

const WorkoutsRoutes = require('../api/workout/routes/workout-routes');


module.exports = class Routes {
   static init(app, router) {
     WorkoutsRoutes.init(router);


     app.use('/', router);
   }
}

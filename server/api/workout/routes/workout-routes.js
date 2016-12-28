"use strict";

const WorkoutController = require('../controller/workout-controller');

module.exports = class WorkoutRoutes {
    static init(router) {
      router
        .route('/api/workout')
        .get(WorkoutController.getAll)
        .post(WorkoutController.createWorkout);

      router
        .route('/api/workout/:id')
        .put(WorkoutController.updateWorkout)
        .delete(WorkoutController.deleteWorkout);
    }
}

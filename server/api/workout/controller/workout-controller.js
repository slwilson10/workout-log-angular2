"use strict";

const WorkoutDAO = require('../dao/workout-dao');

module.exports = class WorkoutController {
  static getAll(req, res) {
      WorkoutDAO
        .getAll()
        .then(workouts => res.status(200).json(workouts))
        .catch(error => res.status(400).json(error));
  }

  static createWorkout(req, res) {
      let _workout = req.body;
      WorkoutDAO
        .createWorkout(_workout)
        .then(workout => res.status(201).json(workout))
        .catch(error => res.status(400).json(error));
  }

  static updateWorkout(req, res) {
      let _workout = req.body;
      let _id = req.params.id;
      WorkoutDAO
        .updateWorkout(_id, _workout)
        .then(workout => res.status(201).json(workout))
        .catch(error => res.status(400).json(error));
  }

  static deleteWorkout(req, res) {
    let _id = req.params.id;

    WorkoutDAO
      .deleteWorkout(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}

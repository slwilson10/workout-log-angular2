"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const workoutSchema = require('../model/workout-model');
const _ = require('lodash');

workoutSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Workout
          .find(_query)
          .exec((err, workouts) => {
              err ? reject(err)
                  : resolve(workouts);
          });
      });
}

workoutSchema.statics.createWorkout = (workout) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(workout))
          return reject(new TypeError('Object or Id is not valid.'));

      let _workout = new Workout(workout);

      _workout.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

workoutSchema.statics.updateWorkout = (id, workout) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(workout))
          return reject(new TypeError('Object or Id is not valid.'));

          let _workout = JSON.stringify(workout);

        Workout
          .findOneAndUpdate({ '_id': id }, workout, {new: true, setDefaultsOnInsert: true})
          .exec((err, _workout) => {
              err ? reject(err)
                  : resolve([id, _workout]);
          });
        });
}

workoutSchema.statics.deleteWorkout = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Workout
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

const Workout  = mongoose.model('Workout', workoutSchema);

module.exports = Workout;

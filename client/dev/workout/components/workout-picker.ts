import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'workout-picker',
  templateUrl: 'workout/templates/workout-picker.html',
  styleUrls: ['workout/styles/workout-picker.css']
})

export class WorkoutPicker {
  @Output() onSetForm = new EventEmitter();

  public walkWorkout = {
    name: 'Walk',
    date: moment().format(),
    duration: {
      hours: 0,
      minutes: 30
    },
    calories: 90,
    distance: 3,
    heartrate: 70,
    zones: {
      peak: 0,
      cardio: 15,
      fatburn: 15
    }
  };

  public runWorkout = {
    name: 'Run',
    date: moment().format(),
    duration: {
      hours: 0,
      minutes: 30
    },
    calories: 150,
    distance: 3,
    heartrate: 120,
    zones: {
      peak: 0,
      cardio: 15,
      fatburn: 15
    }
  };

  public bikeWorkout = {
    name: 'Bike',
    date: moment().format(),
    duration: {
      hours: 1,
      minutes: 30
    },
    calories: 200,
    distance: 12,
    heartrate: 100,
    zones: {
      peak: 0,
      cardio: 1,
      fatburn: 30
    }
  };

  ngOnInit() {}

  // Run save createWorkout event if form is valid, then reset
  pick(workout) {
    this.onSetForm.next(workout);
  }

}

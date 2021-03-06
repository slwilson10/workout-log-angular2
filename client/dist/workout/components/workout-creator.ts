import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

import { WorkoutModel } from '../store/workout-store';

@Component({
  selector: 'workout-creator',
  templateUrl: 'workout/templates/workout-creator.html',
  styleUrls: ['workout/styles/workout-creator.css']
})

export class WorkoutCreator {
  @Output() onCreate = new EventEmitter();
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  public defaultWorkout = {
    name: 'Workout',
    date: moment().format('YYYY-MM-DD'),
    duration: {
      hours: 0,
      minutes: 30
    },
    calories: 100,
    distance: 0,
    heartrate: 90,
    zones: {
      peak: 0,
      cardio: 0,
      fatburn: 0
    }
  };

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
      this.setForm(this.defaultWorkout);
  }

  // Run save createWorkout event if form is valid, then reset
  create(model: WorkoutModel, isValid: boolean) {
    console.log('Creating');
    this.submitted = true;
    if(isValid){
      // Set date to datetime using passed startOf day
      model.date = moment(model.date).startOf('day').format();
      this.onCreate.next(model);
      this.setForm(this.defaultWorkout);
    }
  }

  // Set input text to blank
  setForm(workout) {
    this.submitted = false;
    this.myForm = this._fb.group({
      name: [workout.name, [<any>Validators.required, <any>Validators.minLength(1)]],
      date: [moment(workout.date).format('YYYY-MM-DD')],
      duration: this._fb.group({
        hours: [workout.duration.hours],
        minutes: [workout.duration.minutes]
      }),
      calories: [workout.calories],
      distance: [workout.distance],
      heartrate: [workout.heartrate],
      zones: this._fb.group({
        peak: [workout.zones.peak],
        cardio: [workout.zones.cardio],
        fatburn: [workout.zones.fatburn]
      })
    });
  }
}

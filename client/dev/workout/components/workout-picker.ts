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
  public myForm: FormGroup; // our model driven form
  public events: any[] = []; // use later to display form changes

  public runWorkout = {
    name: ['Run', [<any>Validators.required, <any>Validators.minLength(1)]],
    date: [moment().format('YYYY-MM-DD')],
    duration: this._fb.group({
      hours: [0],
      minutes: [30]
    }),
    calories: [150],
    distance: [3],
    heartrate: [120],
    zones: this._fb.group({
      peak: [0],
      cardio: [15],
      fatburn: [15]
    })
  };

  constructor(private _fb: FormBuilder) {} // form builder simplify form initialization

  ngOnInit() {}

  // Run save createWorkout event if form is valid, then reset
  pick(workout) {
    console.log('Picking');
    this.onSetForm.next(workout);

  }

}

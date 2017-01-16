import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

import { WorkoutModel } from '../store/workout-store';

@Component({
  selector: 'workout-editor',
  templateUrl: 'workout/templates/workout-editor.html',
  styleUrls: ['workout/styles/workout-editor.css']
})

export class WorkoutEditor {
  @Input() workout: WorkoutModel;
  @Output() onUpdate = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
      console.log(this.workout._id);
      this.reset();
  }

  // Run save createWorkout event if form is valid, then reset
  update(model: WorkoutModel, isValid: boolean) {
        this.submitted = true;

        if(isValid){
          console.log('Editor: ' + model);
          // Edit date of model to be start of passed date
          model.date = moment(model.date).startOf('day').format();
          this.onUpdate.next(model);
          this.reset();
        }
    }

    edit(){
      this.onEdit.next();
    }

  // Set input text to passed in workout
  reset() {
    this.submitted = false;
    this.myForm = this._fb.group({
            id: [this.workout._id],
            name: [this.workout.name, [<any>Validators.required, <any>Validators.minLength(1)]],
            date: [moment(this.workout.date).startOf('day').format('YYYY-MM-DD')],
            duration: this._fb.group({
                hours: [this.workout.duration[0].hours],
                minutes: [this.workout.duration[0].minutes]
            }),
            calories: [this.workout.calories],
            distance: [this.workout.distance],
            heartrate: [this.workout.heartrate],
            zones: this._fb.group({
                peak: [this.workout.zones[0].peak],
                cardio: [this.workout.zones[0].cardio],
                fatburn: [this.workout.zones[0].fatburn]
            }),
    });
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WorkoutModel } from '../store/workout-store';
import { WorkoutService } from '../services/workout-service';
import * as moment from 'moment';

@Component({
  selector: 'workout-log',
  templateUrl: 'workout/templates/workout-log.html',
  styleUrls: ['workout/styles/workout-log.css']
})

export class WorkoutLog implements OnInit {
  // Create empty array for workouts
  workouts: WorkoutModel[] = [];
  public dateRange= {
    'startDate': moment().subtract(7,'days').format('YYYY-MM-DD'),
    'endDate': moment().format('YYYY-MM-DD')
  };
  constructor(private _workoutService: WorkoutService) {}

  ngOnInit() {
    // Run on init
    this._getAll();
  }

  // Populate workouts through service
  private _getAll():void {
    this._workoutService
        .getAll()
        .subscribe((workouts) => {
          this.workouts = workouts;
        });
  }

  // Create new workout through service
  create(workout):void {
    this._workoutService
        .create(workout)
        .subscribe((n) => {
          this.workouts.push(n);
        });
  }

  update(workout):void {
    console.log('Log: ');
    let id;
    this._workoutService
        .update(workout)
        .subscribe((workout) => {
          this.workouts.forEach((w, i) => {
            if (w._id === workout[0]){
              console.log('Yes!');
              return this.workouts.splice(i, 1, workout[1]);
            }
          });
        })
  }

  // Create new workout through service
  delete(id):void {
    console.log('Log Deleting: ' + id);
    this._workoutService
        .delete(id)
        .subscribe(() => {
          this.workouts.forEach((w, i) => {
            if (w._id === id)
              return this.workouts.splice(i, 1);
          });
        })
  }

  // Create new workout through service
  setDateRange(dateRange):void {
    this.dateRange = dateRange;
    console.log("start date: " + this.dateRange.startDate);
    console.log("end date: " + this.dateRange.endDate);
  }
}

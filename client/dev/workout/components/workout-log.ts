import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WorkoutModel } from '../store/workout-store';
import { WorkoutService } from '../services/workout-service';
import { WorkoutChart } from '../components/workout-chart';

import * as moment from 'moment';

@Component({
  selector: 'workout-log',
  templateUrl: 'workout/templates/workout-log.html',
  styleUrls: ['workout/styles/workout-log.css']
})

export class WorkoutLog implements OnInit {

  @ViewChild(WorkoutChart)
  private chartComp: WorkoutChart;

  // Create empty array for workouts
  public workouts: WorkoutModel[] = [];
  public filteredWorkouts: WorkoutModel[] = [];
  public dateRange= {
    'startDate': moment().subtract(7,'days').format(),
    'endDate': moment().add(1,'days').format()
  };
  constructor(private _workoutService: WorkoutService) {}

  ngOnInit() {
    this._getAll();
    // setTimeout(() =>{
    //   this.chartComp.drawGraph(this.dateRange, this.filteredWorkouts)
    // },2000);

  }

  // Populate workouts through service, set dateRange
  private _getAll():void {
    this._workoutService
        .getAll()
        .subscribe((workouts) => {
          this.workouts = workouts;
          this.setDateRange(this.dateRange);
        });
  }

  // Create new workout through service
  create(workout):void {
    console.log('creating: ' + workout);
    this._workoutService
        .create(workout)
        .subscribe((n) => {
          this.workouts.push(n);
          this.setDateRange(this.dateRange);
        });
  }

  // Update model through service call, update model in components
  update(workout):void {
    console.log('Updating: ' + workout);
    this._workoutService
      .update(workout)
      .subscribe((workout) => {
        this.workouts.forEach((w, i) => {
          if (w._id === workout[0]){
            return this.workouts.splice(i, 1, workout[1]);
          }
        });
        this.setDateRange(this.dateRange);
      })
  }

  // Delete through service call, update models and dateRange
  delete(id):void {
    console.log('Deleting: ' + id);
    this._workoutService
        .delete(id)
        .subscribe(() => {
          this.workouts.forEach((w, i) => {
            if (w._id === id){
              return this.workouts.splice(i, 1);
            }
          });
          this.setDateRange(this.dateRange);
        })
  }

  setChart(){
    this.chartComp.drawGraph(this.dateRange, this.filteredWorkouts);
  }

  // Loop through all workouts, pull those inside of dateRange
  // Set parent component's dateRange to passed value
  setDateRange(dateRange):void {
    this.filteredWorkouts = []; // Clear array before adding new
    for (let w of this.workouts) {
      if(w.date >= dateRange.startDate && w.date <= dateRange.endDate){
        this.filteredWorkouts.push(w);
      }
    }
    this.dateRange = dateRange;
    this.setChart();
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { WorkoutModel } from '../store/workout-store';

@Component({
  selector: 'workout',
  templateUrl: 'workout/templates/workout.html',
  styleUrls: ['workout/styles/workout.css']
})

export class Workout implements OnInit{
  @Input() workout: WorkoutModel;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  public editing: boolean = false;

  ngOnInit() {}

  edit() {
    console.log('Editing');
    this.onEdit.next();
  }

  delete(id) {
    console.log('Deleting');
    this.onDelete.next(id);
  }
};

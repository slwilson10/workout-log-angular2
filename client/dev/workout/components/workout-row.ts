import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { WorkoutModel } from '../store/workout-store';

@Component({
  selector: 'workout-row',
  templateUrl: 'workout/templates/workout-row.html',
  styleUrls: ['workout/styles/workout-row.css']
})

export class WorkoutRow implements OnInit{
  @Input() workout: WorkoutModel;
  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  public editing: boolean = false;

  ngOnInit() {}

  edit() {
    console.log('Editing');
    this.editing = !this.editing;
  }

  update(model) {
    this.onUpdate.next(model);
    this.edit();
  }

  delete(id) {
    console.log('Deleting');
    this.onDelete.next(id);
  }
};

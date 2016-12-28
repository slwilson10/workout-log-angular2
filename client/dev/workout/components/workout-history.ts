import { Component,
  Input,
  Output,
  EventEmitter,
  OnInit} from '@angular/core';

import { WorkoutModel } from '../store/workout-store';

@Component({
  selector: 'workout-history',
  templateUrl: 'workout/templates/workout-history.html',
  styleUrls: ['workout/styles/workout-history.css'],
})

export class WorkoutHistory implements OnInit {
  @Input() workouts: WorkoutModel;
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  public editing: boolean = false;

  ngOnInit(){}

  delete(id) {
    console.log('Deleting');
    this.onDelete.next(id);
  }

  update(workout) {
    console.log('Updating');
    this.onUpdate.next(workout);
  }
}

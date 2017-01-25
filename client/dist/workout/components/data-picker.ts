import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-picker',
  templateUrl: 'workout/templates/data-picker.html',
  styleUrls: ['workout/styles/data-picker.css']
})

export class DataPicker {
  @Output() onSetDataType = new EventEmitter();

  public calories = 'calories';
  public heartrate = 'heartrate';
  public duration = 'duration';

  // Run inilazation functions
  ngOnInit() {}

  // Pass date object to parent component
  setDataType(data) {
    this.onSetDataType.next(data);
  }
}

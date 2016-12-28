import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'date-picker',
  templateUrl: 'workout/templates/date-picker.html',
  styleUrls: ['workout/styles/date-picker.css']
})

export class DatePicker {
  @Output() onSetDateRange = new EventEmitter();
  public dateRangeForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
      this.reset();
  }

  // Run save createWorkout event if form is valid, then reset
  setDateRange(dateRange) {
    this.onSetDateRange.next(dateRange);
  }

  // Set input text to blank
  reset() {
    this.submitted = false;
    this.dateRangeForm = this._fb.group({
            startDate: [moment().subtract(7,'days').format('YYYY-MM-DD')],
            endDate: [moment().format('YYYY-MM-DD')]

        });
  }
}

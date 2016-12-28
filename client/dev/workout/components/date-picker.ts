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
  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization
  public dateRangeForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  public curDate = moment().format('YYYY-MM-DD');
  public pastWeek = moment().subtract(7,'days').format('YYYY-MM-DD');
  public pastMonth = moment().subtract(1,'months').format('YYYY-MM-DD');
  public pastYear = moment().subtract(1,'years').format('YYYY-MM-DD');

  // Run inilazation functions
  ngOnInit() {
      this.setCalendarPicker(
        this.pastWeek,
        this.curDate
      );
  }

  // Pass date from button click to setDateRange and setCalendarPicker
  dateButtonClick(date) {
    this.setDateRange({
      'startDate': date,
      'endDate': this.curDate
    });
    this.setCalendarPicker(date, this.curDate);
  }

  // Set form inputs for calendar picker
  setCalendarPicker(startDate, endDate) {
    this.submitted = false;
    this.dateRangeForm = this._fb.group({
            startDate: [startDate],
            endDate: [endDate]
    });
  }

  // Pass date object to parent component
  setDateRange(dateRange) {
    this.onSetDateRange.next(dateRange);
  }
}

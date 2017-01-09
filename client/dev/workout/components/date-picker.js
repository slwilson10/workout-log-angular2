"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var moment = require('moment');
var DatePicker = (function () {
    function DatePicker(_fb) {
        this._fb = _fb;
        this.onSetDateRange = new core_1.EventEmitter();
        this.events = []; // use later to display form changes
        this.curDate = moment().format();
        this.pastWeek = moment().subtract(7, 'days').format();
        this.pastMonth = moment().subtract(1, 'months').format();
        this.pastYear = moment().subtract(1, 'years').format();
    } // form builder simplify form initialization
    // Run inilazation functions
    DatePicker.prototype.ngOnInit = function () {
        this.setCalendarPicker(this.pastWeek, this.curDate);
    };
    // Pass date from button click to setDateRange and setCalendarPicker
    DatePicker.prototype.dateButtonClick = function (date) {
        this.setDateRange({
            'startDate': date,
            'endDate': moment(this.curDate).add(1, 'days').format()
        });
        this.setCalendarPicker(date, this.curDate);
    };
    // Set form inputs for calendar picker
    DatePicker.prototype.setCalendarPicker = function (startDate, endDate) {
        this.submitted = false;
        this.dateRangeForm = this._fb.group({
            // Format dates to match calendar input requirment
            startDate: [moment(startDate).format('YYYY-MM-DD')],
            endDate: [moment(endDate).format('YYYY-MM-DD')]
        });
    };
    // Pass date object to parent component
    DatePicker.prototype.setDateRange = function (dateRange) {
        // Format dates to include timezone
        dateRange.startDate = moment(dateRange.startDate).startOf('day').format();
        dateRange.endDate = moment(dateRange.endDate).endOf('day').format();
        this.onSetDateRange.next(dateRange);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatePicker.prototype, "onSetDateRange", void 0);
    DatePicker = __decorate([
        core_1.Component({
            selector: 'date-picker',
            templateUrl: 'workout/templates/date-picker.html',
            styleUrls: ['workout/styles/date-picker.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;

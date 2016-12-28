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
var workout_service_1 = require('../services/workout-service');
var moment = require('moment');
var WorkoutLog = (function () {
    function WorkoutLog(_workoutService) {
        this._workoutService = _workoutService;
        // Create empty array for workouts
        this.workouts = [];
        this.dateRange = {
            'startDate': moment().subtract(7, 'days').format('YYYY-MM-DD'),
            'endDate': moment().format('YYYY-MM-DD')
        };
    }
    WorkoutLog.prototype.ngOnInit = function () {
        // Run on init
        this._getAll();
    };
    // Populate workouts through service
    WorkoutLog.prototype._getAll = function () {
        var _this = this;
        this._workoutService
            .getAll()
            .subscribe(function (workouts) {
            _this.workouts = workouts;
        });
    };
    // Create new workout through service
    WorkoutLog.prototype.create = function (workout) {
        var _this = this;
        this._workoutService
            .create(workout)
            .subscribe(function (n) {
            _this.workouts.push(n);
        });
    };
    WorkoutLog.prototype.update = function (workout) {
        var _this = this;
        console.log('Log: ');
        var id;
        this._workoutService
            .update(workout)
            .subscribe(function (workout) {
            _this.workouts.forEach(function (w, i) {
                if (w._id === workout[0]) {
                    console.log('Yes!');
                    return _this.workouts.splice(i, 1, workout[1]);
                }
            });
        });
    };
    // Create new workout through service
    WorkoutLog.prototype.delete = function (id) {
        var _this = this;
        console.log('Log Deleting: ' + id);
        this._workoutService
            .delete(id)
            .subscribe(function () {
            _this.workouts.forEach(function (w, i) {
                if (w._id === id)
                    return _this.workouts.splice(i, 1);
            });
        });
    };
    // Create new workout through service
    WorkoutLog.prototype.setDateRange = function (dateRange) {
        this.dateRange = dateRange;
        console.log("start date: " + this.dateRange.startDate);
        console.log("end date: " + this.dateRange.endDate);
    };
    WorkoutLog = __decorate([
        core_1.Component({
            selector: 'workout-log',
            templateUrl: 'workout/templates/workout-log.html',
            styleUrls: ['workout/styles/workout-log.css']
        }), 
        __metadata('design:paramtypes', [workout_service_1.WorkoutService])
    ], WorkoutLog);
    return WorkoutLog;
}());
exports.WorkoutLog = WorkoutLog;

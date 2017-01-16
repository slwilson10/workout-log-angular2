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
var core_2 = require('@angular/core');
var workout_service_1 = require('../services/workout-service');
var workout_chart_1 = require('../components/workout-chart');
var moment = require('moment');
var WorkoutLog = (function () {
    function WorkoutLog(_workoutService) {
        this._workoutService = _workoutService;
        // Create empty array for workouts
        this.workouts = [];
        this.filteredWorkouts = [];
        this.dateRange = {
            'startDate': moment().subtract(7, 'days').startOf('day').format(),
            'endDate': moment().add(1, 'days').endOf('day').format()
        };
        this.dataType = 'calories';
    }
    WorkoutLog.prototype.ngOnInit = function () {
        this._getAll();
    };
    // Populate workouts through service, set dateRange
    WorkoutLog.prototype._getAll = function () {
        var _this = this;
        this._workoutService
            .getAll()
            .subscribe(function (workouts) {
            _this.workouts = workouts;
            _this.setDateRange(_this.dateRange);
        });
    };
    // Create new workout through service
    WorkoutLog.prototype.create = function (workout) {
        var _this = this;
        console.log('Creating: ' + workout);
        this._workoutService
            .create(workout)
            .subscribe(function (n) {
            _this.workouts.push(n);
            _this.setDateRange(_this.dateRange);
        });
    };
    // Update model through service call, update model in components
    WorkoutLog.prototype.update = function (workout) {
        var _this = this;
        console.log('Updating: ' + workout);
        this._workoutService
            .update(workout)
            .subscribe(function (workout) {
            _this.workouts.forEach(function (w, i) {
                if (w._id === workout[0]) {
                    return _this.workouts.splice(i, 1, workout[1]);
                }
            });
            _this.setDateRange(_this.dateRange);
        });
    };
    // Delete through service call, update models and dateRange
    WorkoutLog.prototype.delete = function (id) {
        var _this = this;
        console.log('Deleting: ' + id);
        this._workoutService
            .delete(id)
            .subscribe(function () {
            _this.workouts.forEach(function (w, i) {
                if (w._id === id) {
                    return _this.workouts.splice(i, 1);
                }
            });
            _this.setDateRange(_this.dateRange);
        });
    };
    WorkoutLog.prototype.setChart = function () {
        this.chartComp.drawGraph(this.dateRange, this.dataType, this.filteredWorkouts);
    };
    // Loop through all workouts, pull those inside of dateRange
    // Set parent component's dateRange to passed value
    WorkoutLog.prototype.setDateRange = function (dateRange) {
        this.filteredWorkouts = []; // Clear array before adding new
        for (var _i = 0, _a = this.workouts; _i < _a.length; _i++) {
            var w = _a[_i];
            if (w.date >= dateRange.startDate && w.date <= dateRange.endDate) {
                this.filteredWorkouts.push(w);
            }
        }
        this.dateRange = dateRange;
        this.setChart();
    };
    WorkoutLog.prototype.setDataType = function (data) {
        this.dataType = data;
        this.setChart();
    };
    __decorate([
        core_2.ViewChild(workout_chart_1.WorkoutChart), 
        __metadata('design:type', workout_chart_1.WorkoutChart)
    ], WorkoutLog.prototype, "chartComp", void 0);
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

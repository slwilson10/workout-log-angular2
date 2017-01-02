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
var moment = require('moment');
var WorkoutPicker = (function () {
    function WorkoutPicker() {
        this.onSetForm = new core_1.EventEmitter();
        this.walkWorkout = {
            name: 'Walk',
            date: moment().format(),
            duration: {
                hours: 0,
                minutes: 30
            },
            calories: 90,
            distance: 3,
            heartrate: 70,
            zones: {
                peak: 0,
                cardio: 15,
                fatburn: 15
            }
        };
        this.runWorkout = {
            name: 'Run',
            date: moment().format(),
            duration: {
                hours: 0,
                minutes: 30
            },
            calories: 150,
            distance: 3,
            heartrate: 120,
            zones: {
                peak: 0,
                cardio: 15,
                fatburn: 15
            }
        };
        this.bikeWorkout = {
            name: 'Bike',
            date: moment().format(),
            duration: {
                hours: 1,
                minutes: 30
            },
            calories: 200,
            distance: 12,
            heartrate: 100,
            zones: {
                peak: 0,
                cardio: 1,
                fatburn: 30
            }
        };
    }
    WorkoutPicker.prototype.ngOnInit = function () { };
    // Run save createWorkout event if form is valid, then reset
    WorkoutPicker.prototype.pick = function (workout) {
        this.onSetForm.next(workout);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WorkoutPicker.prototype, "onSetForm", void 0);
    WorkoutPicker = __decorate([
        core_1.Component({
            selector: 'workout-picker',
            templateUrl: 'workout/templates/workout-picker.html',
            styleUrls: ['workout/styles/workout-picker.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WorkoutPicker);
    return WorkoutPicker;
}());
exports.WorkoutPicker = WorkoutPicker;

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
var WorkoutCreator = (function () {
    function WorkoutCreator(_fb) {
        this._fb = _fb;
        this.onCreate = new core_1.EventEmitter();
        this.events = []; // use later to display form changes
        this.defaultWorkout = {
            name: ['Workout', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            date: [moment().format('YYYY-MM-DD')],
            duration: this._fb.group({
                hours: [0],
                minutes: [30]
            }),
            calories: [100],
            distance: [0],
            heartrate: [90],
            zones: this._fb.group({
                peak: [0],
                cardio: [0],
                fatburn: [0]
            })
        };
    } // form builder simplify form initialization
    WorkoutCreator.prototype.ngOnInit = function () {
        this.setForm(this.defaultWorkout);
    };
    // Run save createWorkout event if form is valid, then reset
    WorkoutCreator.prototype.create = function (model, isValid) {
        console.log('Creating');
        this.submitted = true;
        if (isValid) {
            // Set date to datetime using current time and timezone
            var dateTime = moment(model.date).format('YYYY-MM-DD') + 'T' +
                moment().format('HH:mm:ssZ');
            model.date = dateTime;
            this.onCreate.next(model);
            this.setForm(this.defaultWorkout);
        }
    };
    // Set input text to blank
    WorkoutCreator.prototype.setForm = function (workout) {
        this.submitted = false;
        this.myForm = this._fb.group(workout);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WorkoutCreator.prototype, "onCreate", void 0);
    WorkoutCreator = __decorate([
        core_1.Component({
            selector: 'workout-creator',
            templateUrl: 'workout/templates/workout-creator.html',
            styleUrls: ['workout/styles/workout-creator.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], WorkoutCreator);
    return WorkoutCreator;
}());
exports.WorkoutCreator = WorkoutCreator;

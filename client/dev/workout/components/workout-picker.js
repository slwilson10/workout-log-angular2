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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var WorkoutPicker = (function () {
    function WorkoutPicker(_fb) {
        this._fb = _fb;
        this.onSetForm = new core_1.EventEmitter();
        this.events = [];
        this.runWorkout = {
            name: ['Run', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            date: [moment().format('YYYY-MM-DD')],
            duration: this._fb.group({
                hours: [0],
                minutes: [30]
            }),
            calories: [150],
            distance: [3],
            heartrate: [120],
            zones: this._fb.group({
                peak: [0],
                cardio: [15],
                fatburn: [15]
            })
        };
    }
    WorkoutPicker.prototype.ngOnInit = function () { };
    WorkoutPicker.prototype.pick = function (workout) {
        console.log('Picking');
        this.onSetForm.next(workout);
    };
    return WorkoutPicker;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WorkoutPicker.prototype, "onSetForm", void 0);
WorkoutPicker = __decorate([
    core_1.Component({
        selector: 'workout-picker',
        templateUrl: 'workout/templates/workout-picker.html',
        styleUrls: ['workout/styles/workout-picker.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], WorkoutPicker);
exports.WorkoutPicker = WorkoutPicker;
//# sourceMappingURL=workout-picker.js.map
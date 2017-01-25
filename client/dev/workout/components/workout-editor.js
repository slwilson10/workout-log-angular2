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
var WorkoutEditor = (function () {
    function WorkoutEditor(_fb) {
        this._fb = _fb;
        this.onUpdate = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.events = [];
    }
    WorkoutEditor.prototype.ngOnInit = function () {
        this.reset();
    };
    WorkoutEditor.prototype.update = function (model, isValid) {
        this.submitted = true;
        if (isValid) {
            console.log('Editor: ' + model);
            model.date = moment(model.date).startOf('day').format();
            this.onUpdate.next(model);
            this.reset();
        }
    };
    WorkoutEditor.prototype.edit = function () {
        this.onEdit.next();
    };
    WorkoutEditor.prototype.reset = function () {
        this.submitted = false;
        this.myForm = this._fb.group({
            id: [this.workout._id],
            name: [this.workout.name, [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            date: [moment(this.workout.date).startOf('day').format('YYYY-MM-DD')],
            duration: this._fb.group({
                hours: [this.workout.duration[0].hours],
                minutes: [this.workout.duration[0].minutes]
            }),
            calories: [this.workout.calories],
            distance: [this.workout.distance],
            heartrate: [this.workout.heartrate],
            zones: this._fb.group({
                peak: [this.workout.zones[0].peak],
                cardio: [this.workout.zones[0].cardio],
                fatburn: [this.workout.zones[0].fatburn]
            }),
        });
    };
    return WorkoutEditor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorkoutEditor.prototype, "workout", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WorkoutEditor.prototype, "onUpdate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WorkoutEditor.prototype, "onEdit", void 0);
WorkoutEditor = __decorate([
    core_1.Component({
        selector: 'workout-editor',
        templateUrl: 'workout/templates/workout-editor.html',
        styleUrls: ['workout/styles/workout-editor.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], WorkoutEditor);
exports.WorkoutEditor = WorkoutEditor;
//# sourceMappingURL=workout-editor.js.map
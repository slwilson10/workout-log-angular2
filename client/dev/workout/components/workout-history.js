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
var WorkoutHistory = (function () {
    function WorkoutHistory() {
        this.onDelete = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
        this.editing = false;
    }
    WorkoutHistory.prototype.ngOnInit = function () { };
    WorkoutHistory.prototype.delete = function (id) {
        console.log('Deleting');
        this.onDelete.next(id);
    };
    WorkoutHistory.prototype.update = function (workout) {
        console.log('Updating');
        this.onUpdate.next(workout);
    };
    return WorkoutHistory;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorkoutHistory.prototype, "workouts", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WorkoutHistory.prototype, "onDelete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], WorkoutHistory.prototype, "onUpdate", void 0);
WorkoutHistory = __decorate([
    core_1.Component({
        selector: 'workout-history',
        templateUrl: 'workout/templates/workout-history.html',
        styleUrls: ['workout/styles/workout-history.css'],
    })
], WorkoutHistory);
exports.WorkoutHistory = WorkoutHistory;
//# sourceMappingURL=workout-history.js.map
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
var WorkoutRow = (function () {
    function WorkoutRow() {
        this.onUpdate = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
        this.editing = false;
    }
    WorkoutRow.prototype.ngOnInit = function () { };
    WorkoutRow.prototype.edit = function () {
        console.log('Editing');
        this.editing = !this.editing;
    };
    WorkoutRow.prototype.update = function (model) {
        console.log('Updating');
        this.onUpdate.next(model);
        this.edit();
    };
    WorkoutRow.prototype.delete = function (id) {
        console.log('Deleting');
        this.onDelete.next(id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], WorkoutRow.prototype, "workout", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WorkoutRow.prototype, "onUpdate", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], WorkoutRow.prototype, "onDelete", void 0);
    WorkoutRow = __decorate([
        core_1.Component({
            selector: 'workout-row',
            templateUrl: 'workout/templates/workout-row.html',
            styleUrls: ['workout/styles/workout-row.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WorkoutRow);
    return WorkoutRow;
}());
exports.WorkoutRow = WorkoutRow;
;

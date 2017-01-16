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
var DataPicker = (function () {
    function DataPicker() {
        this.onSetDataType = new core_1.EventEmitter();
        this.calories = 'calories';
        this.heartrate = 'heartrate';
        this.duration = 'duration';
    }
    // Run inilazation functions
    DataPicker.prototype.ngOnInit = function () { };
    // Pass date object to parent component
    DataPicker.prototype.setDataType = function (data) {
        this.onSetDataType.next(data);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DataPicker.prototype, "onSetDataType", void 0);
    DataPicker = __decorate([
        core_1.Component({
            selector: 'data-picker',
            templateUrl: 'workout/templates/data-picker.html',
            styleUrls: ['workout/styles/data-picker.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataPicker);
    return DataPicker;
}());
exports.DataPicker = DataPicker;

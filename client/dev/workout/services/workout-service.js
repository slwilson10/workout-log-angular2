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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var WorkoutService = (function () {
    function WorkoutService(_http) {
        this._http = _http;
    }
    WorkoutService.prototype.getAll = function () {
        return this._http
            .get(WorkoutService.ENDPOINT.replace(':id', ''))
            .map(function (r) { return r.json(); });
    };
    WorkoutService.prototype.create = function (workout) {
        var _messageStringified = JSON.stringify(workout);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post(WorkoutService.ENDPOINT.replace(':id', ''), _messageStringified, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    WorkoutService.prototype.update = function (workout) {
        var _workoutString = JSON.stringify(workout);
        var id;
        Object.keys(workout).forEach(function (key, keyIndex) {
            if (key === "id") {
                id = workout[key];
            }
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .put(WorkoutService.ENDPOINT.replace(':id', id), _workoutString, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    WorkoutService.prototype.delete = function (id) {
        return this._http
            .delete(WorkoutService.ENDPOINT.replace(':id', id));
    };
    WorkoutService.ENDPOINT = '/api/workout/:id';
    WorkoutService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkoutService);
    return WorkoutService;
}());
exports.WorkoutService = WorkoutService;

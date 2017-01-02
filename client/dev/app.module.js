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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var workout_log_1 = require('./workout/components/workout-log');
var workout_service_1 = require('./workout/services/workout-service');
var nav_bar_1 = require('./workout/components/nav-bar');
var date_picker_1 = require('./workout/components/date-picker');
var workout_chart_1 = require('./workout/components/workout-chart');
var workout_creator_1 = require('./workout/components/workout-creator');
var workout_picker_1 = require('./workout/components/workout-picker');
var workout_editor_1 = require('./workout/components/workout-editor');
var workout_history_1 = require('./workout/components/workout-history');
var workout_row_1 = require('./workout/components/workout-row');
var workout_1 = require('./workout/components/workout');
var orderBy_1 = require('./workout/pipes/orderBy');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot()
            ],
            declarations: [
                workout_log_1.WorkoutLog,
                nav_bar_1.NavBar,
                date_picker_1.DatePicker,
                workout_chart_1.WorkoutChart,
                workout_creator_1.WorkoutCreator,
                workout_picker_1.WorkoutPicker,
                workout_editor_1.WorkoutEditor,
                workout_history_1.WorkoutHistory,
                workout_row_1.WorkoutRow,
                workout_1.Workout,
                orderBy_1.OrderBy
            ],
            providers: [
                workout_service_1.WorkoutService,
            ],
            bootstrap: [
                workout_log_1.WorkoutLog,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

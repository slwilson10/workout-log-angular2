"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var a,s=arguments.length,i=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(i=(s<3?a(i):s>3?a(e,o,i):a(e,o))||i);return s>3&&i&&Object.defineProperty(e,o,i),i},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),core_2=require("@angular/core"),workout_service_1=require("../services/workout-service"),workout_chart_1=require("../components/workout-chart"),moment=require("moment"),WorkoutLog=function(){function t(t){this._workoutService=t,this.workouts=[],this.filteredWorkouts=[],this.dateRange={startDate:moment().subtract(7,"days").startOf("day").format(),endDate:moment().add(1,"days").endOf("day").format()},this.dataType="calories"}return t.prototype.ngOnInit=function(){this._getAll()},t.prototype._getAll=function(){var t=this;this._workoutService.getAll().subscribe(function(e){t.workouts=e,t.setDateRange(t.dateRange)})},t.prototype.create=function(t){var e=this;console.log("Creating: "+t),this._workoutService.create(t).subscribe(function(t){e.workouts.push(t),e.setDateRange(e.dateRange)})},t.prototype.update=function(t){var e=this;console.log("Updating: "+t),this._workoutService.update(t).subscribe(function(t){e.workouts.forEach(function(o,r){if(o._id===t[0])return e.workouts.splice(r,1,t[1])}),e.setDateRange(e.dateRange)})},t.prototype["delete"]=function(t){var e=this;console.log("Deleting: "+t),this._workoutService["delete"](t).subscribe(function(){e.workouts.forEach(function(o,r){if(o._id===t)return e.workouts.splice(r,1)}),e.setDateRange(e.dateRange)})},t.prototype.setChart=function(){this.chartComp.drawGraph(this.dateRange,this.dataType,this.filteredWorkouts)},t.prototype.setDateRange=function(t){this.filteredWorkouts=[];for(var e=0,o=this.workouts;e<o.length;e++){var r=o[e];r.date>=t.startDate&&r.date<=t.endDate&&this.filteredWorkouts.push(r)}this.dateRange=t,this.setChart()},t.prototype.setDataType=function(t){this.dataType=t,this.setChart()},__decorate([core_2.ViewChild(workout_chart_1.WorkoutChart),__metadata("design:type",workout_chart_1.WorkoutChart)],t.prototype,"chartComp",void 0),t=__decorate([core_1.Component({selector:"workout-log",templateUrl:"workout/templates/workout-log.html",styleUrls:["workout/styles/workout-log.css"]}),__metadata("design:paramtypes",[workout_service_1.WorkoutService])],t)}();exports.WorkoutLog=WorkoutLog;
"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var n,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(a<3?n(c):a>3?n(e,o,c):n(e,o))||c);return a>3&&c&&Object.defineProperty(e,o,c),c},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),WorkoutHistory=function(){function t(){this.onDelete=new core_1.EventEmitter,this.onUpdate=new core_1.EventEmitter,this.editing=!1}return t.prototype.ngOnInit=function(){},t.prototype["delete"]=function(t){console.log("Deleting"),this.onDelete.next(t)},t.prototype.update=function(t){console.log("Updating"),this.onUpdate.next(t)},__decorate([core_1.Input(),__metadata("design:type",Object)],t.prototype,"workouts",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],t.prototype,"onDelete",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],t.prototype,"onUpdate",void 0),t=__decorate([core_1.Component({selector:"workout-history",templateUrl:"workout/templates/workout-history.html",styleUrls:["workout/styles/workout-history.css"]}),__metadata("design:paramtypes",[])],t)}();exports.WorkoutHistory=WorkoutHistory;
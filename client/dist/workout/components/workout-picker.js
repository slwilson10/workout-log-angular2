"use strict";var __decorate=this&&this.__decorate||function(t,e,o,r){var a,n=arguments.length,i=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var c=t.length-1;c>=0;c--)(a=t[c])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},core_1=require("@angular/core"),moment=require("moment"),WorkoutPicker=function(){function t(){this.onSetForm=new core_1.EventEmitter,this.walkWorkout={name:"Walk",date:moment().format(),duration:{hours:0,minutes:30},calories:90,distance:3,heartrate:70,zones:{peak:0,cardio:15,fatburn:15}},this.runWorkout={name:"Run",date:moment().format(),duration:{hours:0,minutes:30},calories:150,distance:3,heartrate:120,zones:{peak:0,cardio:15,fatburn:15}},this.bikeWorkout={name:"Bike",date:moment().format(),duration:{hours:1,minutes:30},calories:200,distance:12,heartrate:100,zones:{peak:0,cardio:1,fatburn:30}}}return t.prototype.ngOnInit=function(){},t.prototype.pick=function(t){this.onSetForm.next(t)},__decorate([core_1.Output(),__metadata("design:type",Object)],t.prototype,"onSetForm",void 0),t=__decorate([core_1.Component({selector:"workout-picker",templateUrl:"workout/templates/workout-picker.html",styleUrls:["workout/styles/workout-picker.css"]}),__metadata("design:paramtypes",[])],t)}();exports.WorkoutPicker=WorkoutPicker;
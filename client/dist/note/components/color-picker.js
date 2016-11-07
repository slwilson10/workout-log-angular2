"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var c,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var l=e.length-1;l>=0;l--)(c=e[l])&&(s=(i<3?c(s):i>3?c(t,o,s):c(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),ColorPicker=function(){function e(){this.colors=[],this.selected=new core_1.EventEmitter,this.isSelectorVisible=!1}return e.prototype.showSelector=function(){this.isSelectorVisible=!this.isSelectorVisible},e.prototype.selectColor=function(e){this.showSelector(),this.selected.next(e)},__decorate([core_1.Input(),__metadata("design:type",Array)],e.prototype,"colors",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],e.prototype,"selected",void 0),e=__decorate([core_1.Component({selector:"color-picker",templateUrl:"note/templates/color-picker.html",styleUrls:["note/styles/color-picker.css"]}),__metadata("design:paramtypes",[])],e)}();exports.ColorPicker=ColorPicker;
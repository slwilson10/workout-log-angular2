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
var NoteCard = (function () {
    function NoteCard() {
        this.onChecked = new core_1.EventEmitter();
        this.showCheck = false;
    }
    // When note-card check is clicked
    NoteCard.prototype.check = function () {
        this.onChecked.next(this.note._id);
    };
    // Toggle check mark icon on note-card hover
    NoteCard.prototype.toggle = function () {
        this.showCheck = !this.showCheck;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoteCard.prototype, "note", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoteCard.prototype, "onChecked", void 0);
    NoteCard = __decorate([
        core_1.Component({
            selector: 'note-card',
            templateUrl: 'note/templates/note-card.html',
            styleUrls: ['note/styles/note-card.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCard);
    return NoteCard;
}());
exports.NoteCard = NoteCard;
;

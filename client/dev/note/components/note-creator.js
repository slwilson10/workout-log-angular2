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
var NoteCreator = (function () {
    function NoteCreator() {
        this.createNote = new core_1.EventEmitter();
        this.colors = ['white', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
        this.newNote = { title: '', content: '', color: 'white' };
        this.fullForm = false;
    }
    // Set color for new note through color-picker
    NoteCreator.prototype.onColorSelect = function (color) {
        this.newNote.color = color;
    };
    // Create new note, run cleanup functions
    NoteCreator.prototype.onCreateNote = function () {
        var _a = this.newNote, title = _a.title, content = _a.content, color = _a.color;
        if (title && content && color) {
            this.createNote.next({ title: title, content: content, color: color });
            this.fullForm = false;
            this.reset();
        }
    };
    // Set input text to blank
    NoteCreator.prototype.reset = function () {
        this.newNote = { title: '', content: '', color: 'white' };
    };
    // Toggle fullform on input touch
    NoteCreator.prototype.toggle = function (content) {
        this.fullForm = content;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoteCreator.prototype, "createNote", void 0);
    NoteCreator = __decorate([
        core_1.Component({
            selector: 'note-creator',
            templateUrl: 'note/templates/note-creator.html',
            styleUrls: ['note/styles/note-creator.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCreator);
    return NoteCreator;
}());
exports.NoteCreator = NoteCreator;

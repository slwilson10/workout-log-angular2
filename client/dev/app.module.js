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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var note_1 = require("./note/components/note");
var note_service_1 = require("./note/services/note-service");
var nav_bar_1 = require("./note/components/nav-bar");
var note_creator_1 = require("./note/components/note-creator");
var notes_list_1 = require("./note/components/notes-list");
var note_card_1 = require("./note/components/note-card");
var color_picker_1 = require("./note/components/color-picker");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MaterialModule.forRoot()
        ],
        declarations: [
            note_1.Note,
            nav_bar_1.NavBar,
            note_creator_1.NoteCreator,
            notes_list_1.NotesList,
            note_card_1.NoteCard,
            color_picker_1.ColorPicker
        ],
        providers: [
            note_service_1.NoteService,
        ],
        bootstrap: [
            note_1.Note,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
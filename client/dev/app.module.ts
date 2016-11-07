import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { Note }   from './note/components/note';
import { NoteService }   from './note/services/note-service';

import { NavBar } from './note/components/nav-bar';
import { NoteCreator } from './note/components/note-creator';
import { NotesList } from './note/components/notes-list';
import { NoteCard } from './note/components/note-card';
import { ColorPicker } from './note/components/color-picker';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule.forRoot()
    ],
   declarations: [
      Note,
      NavBar,
      NoteCreator,
      NotesList,
      NoteCard,
      ColorPicker
    ],
    providers: [
      NoteService,
    ],
    bootstrap: [
      Note
    ],
})
export class AppModule {}

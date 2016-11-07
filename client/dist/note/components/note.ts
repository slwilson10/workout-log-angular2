import { Component,
  Input,
  Output,
  EventEmitter,
  OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NoteModel } from '../store/note-store';
import { NoteService } from '../services/note-service';

@Component({
  selector: 'note',
  templateUrl: 'note/templates/note.html',
  styleUrls: ['note/styles/note.css']
})

export class Note implements OnInit {
  // Create empty array for notes
  notes: NoteModel[] = [];

  constructor(private _noteService: NoteService) {}

  ngOnInit() {
    // Run on init
    this._getAll();
  }

  // Populate notes through service
  private _getAll():void {
    this._noteService
        .getAll()
        .subscribe((notes) => {
          this.notes = notes;
        });
  }

  // Create new note through service
  onCreateNote(note):void {
    this._noteService
        .add(note)
        .subscribe((n) => {
          this.notes.push(n);
        });
  }

  // Delete note through service
  onChecked(id: string):void {
    this._noteService
      .remove(id)
      .subscribe(() => {
        this.notes.forEach((t, i) => {
          if (t._id === id)
            return this.notes.splice(i, 1);
        });
      })
  }
}

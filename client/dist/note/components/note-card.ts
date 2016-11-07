import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoteModel } from '../store/note-store';

@Component({
  selector: 'note-card',
  templateUrl: 'note/templates/note-card.html',
  styleUrls: ['note/styles/note-card.css']
})

export class NoteCard {
  @Input() note: NoteModel;
  @Output() onChecked = new EventEmitter();
  showCheck: boolean = false;

  // When note-card check is clicked
  check() {
    this.onChecked.next(this.note._id);
  }

  // Toggle check mark icon on note-card hover
  toggle() {
    this.showCheck = ! this.showCheck;
  }
};

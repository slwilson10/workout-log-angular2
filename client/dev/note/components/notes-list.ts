import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import { NoteModel } from '../store/note-store';

@Component({
  selector: 'notes-list',
  templateUrl: 'note/templates/notes-list.html',
  styleUrls: ['note/styles/notes-list.css']
})

export class NotesList {
  @Input() notes: NoteModel;
  @Output() onChecked = new EventEmitter();

  check(id) {
    this.onChecked.next(id);
  }
}

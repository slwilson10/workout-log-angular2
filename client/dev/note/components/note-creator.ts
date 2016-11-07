import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-creator',
  templateUrl: 'note/templates/note-creator.html',
  styleUrls: ['note/styles/note-creator.css']
})

export class NoteCreator {
  @Output() createNote = new EventEmitter();
  colors: Array<string> = ['white','blue','red','yellow','green','orange','purple'];
  newNote = {title: '', content: '', color: 'white'};
  fullForm: boolean = false;

  // Set color for new note through color-picker
  onColorSelect(color: string) {
    this.newNote.color = color;
  }

  // Create new note, run cleanup functions
  onCreateNote() {
    const { title, content, color } = this.newNote
    if(title && content && color) {
      this.createNote.next({title, content, color})
      this.fullForm = false;
      this.reset();
    }
  }

  // Set input text to blank
  reset() {
    this.newNote = {title: '', content: '', color: 'white'}
  }

  // Toggle fullform on input touch
  toggle(content: boolean) {
    this.fullForm = content
  }
}

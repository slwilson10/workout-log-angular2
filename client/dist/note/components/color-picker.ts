import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-picker',
  templateUrl: 'note/templates/color-picker.html',
  styleUrls: ['note/styles/color-picker.css']
})

export class ColorPicker {
  @Input() colors: Array<string> = [];
  @Output() selected = new EventEmitter();
  isSelectorVisible: boolean = false;

  // Toggle color-picker display
  showSelector(){
    this.isSelectorVisible = !this.isSelectorVisible;
  }

  // When color-picker icon is clicked
  selectColor(color) {
    this.showSelector();
    this.selected.next(color);
  }
}

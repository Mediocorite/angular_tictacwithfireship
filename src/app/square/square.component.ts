import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf = "!value">{{ value }}</button>
    <button nbButton fullWidth  status="success" *ngIf = "value == 'X'">{{ value }}</button>
    <button nbButton fullWidth  status="info"*ngIf = "value == 'O'">{{ value }}</button>git 
   `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}

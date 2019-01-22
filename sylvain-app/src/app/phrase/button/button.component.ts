import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IPhrase } from '../phrases.service';

@Component({
  selector: 'sa-button',
  template: `
    <button (click)="play()" [ngStyle]="phrase.styles">Click me</button
    ><audio #audio src="{{ phrase.src }}"></audio>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() phrase: IPhrase;
  @Input() styles = 'margin: 0px 0px';

  @ViewChild('audio') audio: ElementRef;

  play() {
    this.audio.nativeElement.play();
    console.log('play', this.phrase);
  }
}

import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IPhrase } from '../phrases.service';

@Component({
  selector: 'sa-button',
  template: `
    <div class="sa-button" (click)="play()">
      <div class="caption">
        <p>{{ phrase.label }}</p>
        <sub>Click to play</sub>
      </div>
      <button><img src="/assets/baseline-play_circle_filled-24px.svg" /></button
      ><audio #audio src="{{ phrase.src }}"></audio>
    </div>
  `,
  styleUrls: ['./button.component.scss'],
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

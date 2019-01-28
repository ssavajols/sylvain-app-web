import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IPhrase } from '../phrases.service';

@Component({
  selector: 'sa-button',
  template: `
    <div class="sa-button" (click)="play()">
      <div class="caption">
        <p>{{ phrase.label || 'Audio : ' + phrase.id }}</p>
        <sub>Click to play</sub>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
            fill="currentColor"
          />
        </svg></button
      ><audio #audio src="{{ phrase.src }}"></audio>
    </div>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() phrase: IPhrase;
  @Input() styles = 'margin: 0px 0px';

  @ViewChild('audio') audio: ElementRef;

  volume = 0.3;

  play() {
    this.audio.nativeElement.volume = this.volume;
    this.audio.nativeElement.play();
  }
}

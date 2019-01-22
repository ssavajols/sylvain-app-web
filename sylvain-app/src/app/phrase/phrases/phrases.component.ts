import { Component } from '@angular/core';
import { PhrasesService, IPhrase } from '../phrases.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sa-phrases',
  template: `
    <ul>
      <li *ngFor="let phrase of (phrases | async)">
        <sa-button [phrase]="phrase"></sa-button>
      </li>
    </ul>
  `,
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent {
  constructor(private _phrasesService: PhrasesService) {}

  phrases: Observable<IPhrase[]> = this._phrasesService.phrases$.pipe(
    map(phrases =>
      phrases.map(phrase => {
        phrase.styles = this.computeStyles();
        return phrase;
      })
    )
  );

  computeStyles() {
    const x = Math.round(Math.random() * 20) - 10;
    const y = Math.round(Math.random() * 20) - 10;
    const rotate = Math.round(Math.random() * 20) - 10;

    return {
      margin: `${x}px ${y}px`,
      transform: `rotate(${rotate}deg)`
    };
  }
}

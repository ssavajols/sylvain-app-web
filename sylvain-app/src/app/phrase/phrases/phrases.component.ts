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
  styleUrls: ['./phrases.component.scss'],
})
export class PhrasesComponent {
  constructor(private _phrasesService: PhrasesService) {}

  phrases: Observable<IPhrase[]> = this._phrasesService.phrases$;
}

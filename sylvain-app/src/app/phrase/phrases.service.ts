import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface IPhrase {
  id: number;
  src: string;
  styles?: any;
}

@Injectable({
  providedIn: 'root',
})
export class PhrasesService {
  BASE_URI = 'https://interactive-examples.mdn.mozilla.net';
  constructor() {}

  phrases$: Observable<IPhrase[]> = of();

  getAudio(path: string) {
    return this.BASE_URI + path;
  }
}

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface IPhrase {
  id: number;
  src: string;
  styles?: any;
  label?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhrasesService {
  BASE_URI = '/assets';
  constructor() {}

  phrases$: Observable<IPhrase[]> = of();

  getAudio(path: string) {
    return this.BASE_URI + path;
  }
}

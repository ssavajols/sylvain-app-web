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

  phrases$: Observable<IPhrase[]> = of([
    {
      id: 1,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 1',
    },
    {
      id: 2,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 2',
    },
    {
      id: 3,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 3',
    },
    {
      id: 4,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 4',
    },
    {
      id: 5,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 5',
    },
    {
      id: 6,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 7,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 8,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 9,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 10,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 11,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
    {
      id: 12,
      src: this.getAudio('/media/t-rex-roar.mp3'),
      label: 'Audio 6',
    },
  ]);

  getAudio(path: string) {
    return this.BASE_URI + path;
  }
}

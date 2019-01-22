import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface IPhrase {
  id: number;
  src: string;
  styles?: any;
}

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {
  BASE_URI = 'https://interactive-examples.mdn.mozilla.net';
  constructor() {}

  phrases$: Observable<IPhrase[]> = of([
    {
      id: 1,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    },
    {
      id: 2,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    },
    {
      id: 3,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    },
    {
      id: 4,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    },
    {
      id: 5,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    },
    {
      id: 6,
      src: this.getAudio('/media/examples/t-rex-roar.mp3')
    }
  ]);

  getAudio(path: string) {
    return this.BASE_URI + path;
  }
}

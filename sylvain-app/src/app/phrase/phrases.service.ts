import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { GlobalService } from '../core/global.service';
import { PlatformLocation } from '@angular/common';

export interface IPhrase {
  id: number;
  src: string;
  styles?: any;
  label?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {
  BASE_URI = location.origin + this._platformLocation.getBaseHrefFromDOM();
  constructor(
    private _global: GlobalService,
    private _platformLocation: PlatformLocation
  ) {}

  phrases$: Observable<IPhrase[]> = ajax.getJSON(this._global.dataSource).pipe(
    map((ajaxResponse: IPhrase[]) =>
      ajaxResponse.map(audio => {
        audio.src = this.getAudio(audio.src);

        return audio;
      })
    )
  );

  getAudio(path: string) {
    let separator = '/';

    if (path[0] === '/') {
      path = path.substring(1, path.length);
    }

    if (this.BASE_URI[this.BASE_URI.length - 1] === '/') {
      separator = '';
    }

    return this.BASE_URI + separator + path;
  }
}

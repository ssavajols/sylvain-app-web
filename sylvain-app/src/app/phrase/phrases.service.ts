import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { GlobalService } from '../core/global.service';

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
  constructor(private _global: GlobalService) {}

  phrases$: Observable<IPhrase[]> = ajax(this._global.dataSource).pipe(
    map(ajaxResponse => ajaxResponse.response)
  );

  getAudio(path: string) {
    return this.BASE_URI + path;
  }
}

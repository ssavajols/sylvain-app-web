import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  backgroundImage = '/assets/IMG_0089.JPG';

  getColor() {
    return {
      r: 33,
      g: 150,
      b: 243,
    };
  }
}

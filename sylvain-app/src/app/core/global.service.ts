import { Injectable } from '@angular/core';

type IBreakpoint = 'XS' | 'SM' | 'MD' | 'LG';

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

  getBreakpoint(): IBreakpoint {
    let breakpoint: IBreakpoint = 'XS';

    if (window.innerWidth > 640) {
      breakpoint = 'SM';
    }

    if (window.innerWidth > 768) {
      breakpoint = 'MD';
    }

    if (window.innerWidth > 1024) {
      breakpoint = 'LG';
    }

    return breakpoint;
  }
}

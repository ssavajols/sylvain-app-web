import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'sa-main',
  template: `
    <div class="cover" [ngStyle]="styles"></div>
    <div class="container"><sa-phrases></sa-phrases></div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  backgroundImage = this._global.backgroundImage;
  color = this._global.getColor();
  styles;
  scrollEvent: Subscription;

  constructor(private _global: GlobalService) {}

  ngOnInit() {
    this.styles = this.computeStyle(0);
    this.scrollEvent = fromEvent(window, 'scroll').subscribe(() => {
      this.styles = this.computeStyle(window.scrollY / 100);
    });
  }

  ngOnDestroy() {
    this.scrollEvent.unsubscribe();
  }

  computeStyle(percent: number = 1) {
    percent = Math.min(1, Math.max(0, percent));

    const startGradient = 180 - percent * 100;
    const endGradient = 220 - percent * 100;
    const position = -100 - 70 * percent;

    const { r, g, b } = this.color;

    return {
      background: `linear-gradient(rgba(${r},${g},${b},0) ${startGradient}px, rgba(${r},${g},${b},1) ${endGradient}px),
                    url(${
                      this.backgroundImage
                    }) no-repeat 0 ${position}px / 100%`,
    };
  }
}

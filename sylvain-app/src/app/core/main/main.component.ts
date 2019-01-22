import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-main',
  template: `
    <sa-phrases></sa-phrases>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

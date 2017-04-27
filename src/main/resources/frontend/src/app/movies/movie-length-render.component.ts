import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    {{renderValue}}
  `,
})
export class MovieLengthRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: number;

  ngOnInit() {
    let hours = Math.floor(this.value / 60);
    let minutes = this.value % 60;
    let displayMinutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
    this.renderValue = `${hours} hr ${displayMinutes} m`;
  }

}

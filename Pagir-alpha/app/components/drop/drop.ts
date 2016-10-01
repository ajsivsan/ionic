import { Component } from '@angular/core';

/*
  Generated class for the Drop component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'drop',
  templateUrl: 'build/components/drop/drop.html'
})
export class Drop {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}

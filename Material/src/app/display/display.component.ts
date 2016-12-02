import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@Component({
  selector: 'app-display-component',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent {
  title = "Rolling coil calculator";
  result: number;
  diameter: number;
  core: number;
  Length: number;
  thickness: number;



  constructor() {
    this.result = 0;
    this.diameter = 0;
    this.core = 0;
    this.thickness = 0;
  }
  // calculates the length of peel based on diameter and thickness
  LengthCalculate(diameter, thickness, core) {

    this.Length = ((Math.PI * ((Math.pow(diameter, 2) / 4) - (Math.pow(core, 2) / 4)) / thickness) / 100);

    return this.Length.toFixed(3);
  }
VolumeCalculate(length,width){

  this.result = length*width;
  
  return this.result;
}
}

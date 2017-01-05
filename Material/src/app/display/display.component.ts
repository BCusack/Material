import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
@Component({
  selector: 'app-display-component',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent {
  title = 'Rolling coil calculator';
  result: number;
  diameter: number;
  core: number;
  Length: number;
  thickness: number;
  volume: number;
  width: number;

  constructor() {
    this.result = 0;
    this.diameter = 0;
    this.core = 0;
    // this.thickness = 0;
    this.volume = 0;
    this.width = 0;
  }
  // calculates the length of peel based on diameter and thickness
  LengthCalculate(diameter, thickness, core) {
    if (thickness && diameter && core) {
      this.Length = ((Math.PI * ((Math.pow(diameter, 2) / 4) - (Math.pow(core, 2) / 4)) / thickness) / 100);
      return (this.Length.toFixed(3)) + 'm';
    } else {
      return;
    }
  }

  NumberOfSheets(length, width) {
if (width)
{ 
  this.result = (width * length) / 100;
    return this.result.toFixed(0);
  }else{
    return;
  }
  }

  Volume(Length, width, Thickess, Sheetresult) {

    this.volume = length * width;

    return this.volume;
  }
}

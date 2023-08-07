import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
  
})
export class Tab1Component {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  HealthCoverageControl= new FormControl('', [Validators.required]);
  HealthCoverageDateTypes = [
    {value: '336',viewValue:'336 - Employment Begin'},
    {value: '303',viewValue:'303 - Mainenance Effective'},
    {value: '348',viewValue:'348 - Benefit Begin'},
    {value: '348',viewValue:'349 - Benefit End'},
    {value: '543',viewValue:'543 - Last Premium Paid Date'}

  ]
}

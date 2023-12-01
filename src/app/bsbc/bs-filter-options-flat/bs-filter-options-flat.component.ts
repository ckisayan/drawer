import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bs-filter-options-flat',
  templateUrl: './bs-filter-options-flat.component.html',
  styleUrls: ['./bs-filter-options-flat.component.css']
})
export class BsFilterOptionsFlatComponent {
  constructor(public dialogRef: MatDialogRef<BsFilterOptionsFlatComponent>) {}
}

import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-bsbc',
  templateUrl: './bsbc.component.html',
  styleUrls: ['./bsbc.component.css']
})
export class BsbcComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  items = ['Customer ', 'Accounts Receivable', 'Order Entry', 'Purchase', 'Pricing', 'Inventory'];
  expandedIndex = 0;
  constructor(private route: ActivatedRoute) {
    const routeName = this.route.snapshot.data['name'];
    console.log(routeName); // This will log the route name
  }
}

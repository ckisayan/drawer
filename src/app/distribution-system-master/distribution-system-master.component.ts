import {Component, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';

//https://material.angular.io/components/expansion/examples
@Component({
  selector: 'app-distribution-system-master',
  templateUrl: './distribution-system-master.component.html',
  styleUrls: ['./distribution-system-master.component.css']
})
export class DistributionSystemMasterComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  items = ['Customer ', 'Accounts Receivable', 'Order Entry', 'Purchase', 'Pricing', 'Inventory'];
  expandedIndex = 0;
  constructor(private route: ActivatedRoute) {
    const routeName = this.route.snapshot.data['name'];
    console.log(routeName); // This will log the route name
  }
}

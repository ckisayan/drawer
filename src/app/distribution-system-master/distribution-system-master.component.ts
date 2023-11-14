import {Component, ViewChild} from '@angular/core';
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
}

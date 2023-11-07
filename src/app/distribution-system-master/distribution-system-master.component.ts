import { Component } from '@angular/core';

@Component({
  selector: 'app-distribution-system-master',
  templateUrl: './distribution-system-master.component.html',
  styleUrls: ['./distribution-system-master.component.css']
})
export class DistributionSystemMasterComponent {
  items = ['Customer ', 'Accounts Receivable', 'Order Entry', 'Purchase', 'Pricing', 'Inventory'];
  expandedIndex = 0;
}

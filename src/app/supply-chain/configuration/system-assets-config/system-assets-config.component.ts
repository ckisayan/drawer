import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-system-assets-config',
  templateUrl: './system-assets-config.component.html',
  styleUrls: ['./system-assets-config.component.css']
})
export class SystemAssetsConfigComponent {
  selectedIndex=0;

  nexttab(){
    console.log("go to next tab");
    this.selectedIndex+=1;
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
}

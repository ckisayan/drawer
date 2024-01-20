import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-system-assets-role-to-object',
  templateUrl: './system-assets-role-to-object.component.html',
  styleUrls: ['./system-assets-role-to-object.component.css']
})
export class SystemAssetsRoleToObjectComponent {
  selectedIndex=0;

  nexttab(){
    console.log("go to next tab");
    this.selectedIndex+=1;
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
}

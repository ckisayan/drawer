import { Component, OnInit } from '@angular/core';
import { BsAdvFilterService } from '../bs-services/bs-adv-filter-service';


@Component({
  selector: 'app-bs-advance-search',
  templateUrl: './bs-advance-search.component.html',
  styleUrls: ['./bs-advance-search.component.css']
})
export class BsAdvanceSearchComponent implements OnInit {
  hideOrigFilterRow: boolean = false;  
  constructor(
    private advFilterService: BsAdvFilterService
  ) {
    console.log("advance search activated:constructor");
    this.advFilterService.getShowOrigTransId.subscribe(origfilt => this.hideOrigFilterRow = origfilt)
    
  }
  ngOnInit(): void {
    console.log("advance search activated:on init");
  }
  showOrigFilter(){
    this.hideOrigFilterRow = !this.hideOrigFilterRow
    this.advFilterService.setShowOrigTransId(this.hideOrigFilterRow);
    console.log(this.hideOrigFilterRow );
  }
  getOrigFilterText() {
    return this.hideOrigFilterRow ? 'add' : 'remove';
  }

}

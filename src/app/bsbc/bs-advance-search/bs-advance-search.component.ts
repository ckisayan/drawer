import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bs-advance-search',
  templateUrl: './bs-advance-search.component.html',
  styleUrls: ['./bs-advance-search.component.css']
})
export class BsAdvanceSearchComponent implements OnInit {
  
  constructor() {
    console.log("advance search activated:constructor");
    
  }
  ngOnInit(): void {
    console.log("advance search activated:on init");
  }



}

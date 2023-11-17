import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bsbc',
  templateUrl: './bsbc.component.html',
  styleUrls: ['./bsbc.component.css']
})
export class BsbcComponent {
  constructor(private route: ActivatedRoute) {
    //const routeName = this.route.snapshot.data['name'];
    //console.log(routeName); // This will log the route name
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseTheRestaurant() {
    console.log('click on the restaurant');
    // this.router.navigate();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurant } from '../model/IRestaurant';
@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {


  @Input() restaurant: IRestaurant;
  imageSrc: string;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.restaurant);
    this.imageSrc = '../../../assets/restaurant/restaurant-item/restaurantImageSource/' + this.restaurant.name + '.jpg';
  }

  chooseTheRestaurant() {
    console.log('restaurant/' + this.restaurant.name);
    this.router.navigate(['restaurant/' + this.restaurant.name]);
  }

}

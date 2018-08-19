import { Component, OnInit } from '@angular/core';
import { IRestaurant } from './model/IRestaurant';
import { RestaurantService } from './restaurant-service/restaurant.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants: IRestaurant[];
  index = 0;
  showLoadMore = true;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants().subscribe(
      data => {
        this.restaurants = data;
        console.log(this.restaurants);
      }
    );
  }

  loadMore() {
    this.index++;
    this.restaurantService.getRestaurants(this.index).subscribe(
      data => {
        if (typeof data === 'undefined' || data === []) {
          this.showLoadMore = false;
        }
        this.restaurants = this.restaurants.concat(data);
        console.log(this.restaurants);
      }
    );
  }

  private getRestaurants() {
    return this.restaurantService.getRestaurants(this.index);
  }

}

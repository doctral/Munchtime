import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';


import { RestaurantItemComponent } from './restaurant-item/restaurant-item.component';
import { RestaurantService } from './restaurant-service/restaurant.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RestaurantsComponent,
    RestaurantItemComponent
  ],
  exports: [
    RestaurantsComponent
  ],
  providers: [
    RestaurantService
  ]
})
export class RestaurantsModule { }

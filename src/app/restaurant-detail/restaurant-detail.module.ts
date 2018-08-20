import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantDetailComponent } from './restaurant-detail.component';
import { RestaurantCheckoutComponent } from './restaurant-checkout/restaurant-checkout.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { FoodItemComponent } from './restaurant-menu/food-item/food-item.component';
import { FoodDetailsComponent } from './restaurant-menu/food-details/food-details.component';
import { RestaurantDetailRoutingModule } from './restaurant-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule
  ],
  declarations: [RestaurantDetailComponent, RestaurantCheckoutComponent, RestaurantMenuComponent, FoodItemComponent, FoodDetailsComponent]
})
export class RestaurantDetailModule { }

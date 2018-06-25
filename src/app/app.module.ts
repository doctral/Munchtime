import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RestaurantsComponent } from './core/components/restaurants/restaurants.component';
import { AuthenticateComponent } from './core/components/authenticate/authenticate.component';
import { DeliverypartnerComponent } from './core/components/footer/deliverypartner/deliverypartner.component';
import { RestaurantpartnerComponent } from './core/components/footer/restaurantpartner/restaurantpartner.component';
import { TermsComponent } from './core/components/footer/terms/terms.component';
import { PrivacyComponent } from './core/components/footer/privacy/privacy.component';
import { RestaurantShowComponent } from './core/components/restaurant-show/restaurant-show.component';
import { RestaurantItemComponent } from './core/components/restaurants/restaurant-item/restaurant-item.component';
import { RestaurantDetailsComponent } from './core/components/restaurants/restaurant-details/restaurant-details.component';
import { RestaurantMenuComponent } from './core/components/restaurants/restaurant-details/restaurant-menu/restaurant-menu.component';
import { RestaurantCheckoutComponent } from './core/components/restaurants/restaurant-details/restaurant-checkout/restaurant-checkout.component';
import { FoodItemComponent } from './core/components/restaurants/restaurant-details/restaurant-menu/food-item/food-item.component';
import { FoodDetailsComponent } from './core/components/restaurants/restaurant-details/restaurant-menu/food-details/food-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RestaurantsComponent,
    AuthenticateComponent,
    DeliverypartnerComponent,
    RestaurantpartnerComponent,
    TermsComponent,
    PrivacyComponent,
    RestaurantShowComponent,
    RestaurantItemComponent,
    RestaurantDetailsComponent,
    RestaurantMenuComponent,
    RestaurantCheckoutComponent,
    FoodItemComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

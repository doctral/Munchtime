import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliverypartnerComponent } from './footer/deliverypartner/deliverypartner.component';
import { RestaurantpartnerComponent } from './footer/restaurantpartner/restaurantpartner.component';
import { TermsComponent } from './footer/terms/terms.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { CoreModule } from '../core/core.module';
import { ShoppingCartComponent } from './header/shopping-cart/shopping-cart.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DeliverypartnerComponent,
    RestaurantpartnerComponent,
    TermsComponent,
    PrivacyComponent,
    ShoppingCartComponent,
    SearchRestaurantComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchRestaurantComponent
  ]
})
export class SharedModule { }

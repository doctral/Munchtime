import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DeliverypartnerComponent } from './footer/deliverypartner/deliverypartner.component';
import { RestaurantpartnerComponent } from './footer/restaurantpartner/restaurantpartner.component';
import { TermsComponent } from './footer/terms/terms.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    DeliverypartnerComponent,
    RestaurantpartnerComponent,
    TermsComponent,
    PrivacyComponent]
})
export class SharedModule { }

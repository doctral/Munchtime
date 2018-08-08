import { Component, OnInit } from '@angular/core';
import { DeliverypartnerComponent } from './deliverypartner/deliverypartner.component';
import { RestaurantpartnerComponent } from './restaurantpartner/restaurantpartner.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

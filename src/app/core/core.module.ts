import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateComponent } from './components/authenticate/authenticate.component';

import { ShoppingCartService } from './service/shopping-cart/shopping-cart.service';

@NgModule({
  imports: [

  CommonModule

  ],
  declarations: [
    AuthenticateComponent
  ],
  exports: [
    AuthenticateComponent
  ],
  providers: [
    ShoppingCartService
  ]
})
export class CoreModule { }

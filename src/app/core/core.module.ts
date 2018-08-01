import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'; 


@NgModule({
  imports: [
    CommonModule,
    AuthenticateComponent
  ],
  declarations: [ShoppingCartComponent]
})
export class CoreModule { }

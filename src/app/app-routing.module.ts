import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: 'restaurant/:id', component: RestaurantDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

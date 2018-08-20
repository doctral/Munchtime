import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantDetailModule } from './restaurant-detail/restaurant-detail.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: RestaurantsComponent },
  { path: 'restaurant/:name', loadChildren: '../app/restaurant-detail/restaurant-detail.module#RestaurantDetailModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RestaurantsModule,
    RestaurantDetailModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRestaurant } from '../model/IRestaurant';
import { Observable } from 'rxjs';


@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) {

  }

  getRestaurants(index): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>('../../assets/restaurant/restaurants' + index + 'Call.json');
  }

}

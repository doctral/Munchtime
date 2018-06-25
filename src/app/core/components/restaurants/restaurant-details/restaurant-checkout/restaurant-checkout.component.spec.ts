import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCheckoutComponent } from './restaurant-checkout.component';

describe('RestaurantCheckoutComponent', () => {
  let component: RestaurantCheckoutComponent;
  let fixture: ComponentFixture<RestaurantCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

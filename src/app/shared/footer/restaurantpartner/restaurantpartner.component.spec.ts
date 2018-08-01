import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantpartnerComponent } from './restaurantpartner.component';

describe('RestaurantpartnerComponent', () => {
  let component: RestaurantpartnerComponent;
  let fixture: ComponentFixture<RestaurantpartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantpartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

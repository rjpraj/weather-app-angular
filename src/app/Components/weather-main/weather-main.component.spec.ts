import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainComponent } from './weather-main.component';

describe('WeatherMainComponent', () => {
  let component: WeatherMainComponent;
  let fixture: ComponentFixture<WeatherMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherMainComponent]
    });
    fixture = TestBed.createComponent(WeatherMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

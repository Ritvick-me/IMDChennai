import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardsComponent } from './weather-cards.component';

describe('WeatherCardsComponent', () => {
  let component: WeatherCardsComponent;
  let fixture: ComponentFixture<WeatherCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

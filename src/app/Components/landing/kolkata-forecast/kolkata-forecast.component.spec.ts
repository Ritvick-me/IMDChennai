import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolkataForecastComponent } from './kolkata-forecast.component';

describe('KolkataForecastComponent', () => {
  let component: KolkataForecastComponent;
  let fixture: ComponentFixture<KolkataForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolkataForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolkataForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

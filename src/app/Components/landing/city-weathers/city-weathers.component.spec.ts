import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeathersComponent } from './city-weathers.component';

describe('CityWeathersComponent', () => {
  let component: CityWeathersComponent;
  let fixture: ComponentFixture<CityWeathersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeathersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyClimateComponent } from './nearby-climate.component';

describe('NearbyClimateComponent', () => {
  let component: NearbyClimateComponent;
  let fixture: ComponentFixture<NearbyClimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyClimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateCards2Component } from './climate-cards2.component';

describe('ClimateCards2Component', () => {
  let component: ClimateCards2Component;
  let fixture: ComponentFixture<ClimateCards2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateCards2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateCards2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

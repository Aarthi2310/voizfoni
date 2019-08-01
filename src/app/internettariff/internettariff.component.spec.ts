import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternettariffComponent } from './internettariff.component';

describe('InternettariffComponent', () => {
  let component: InternettariffComponent;
  let fixture: ComponentFixture<InternettariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternettariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternettariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

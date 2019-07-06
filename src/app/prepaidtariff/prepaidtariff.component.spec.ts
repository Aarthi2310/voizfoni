import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidtariffComponent } from './prepaidtariff.component';

describe('PrepaidtariffComponent', () => {
  let component: PrepaidtariffComponent;
  let fixture: ComponentFixture<PrepaidtariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidtariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidtariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

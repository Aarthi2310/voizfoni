import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentbalanceComponent } from './currentbalance.component';

describe('CurrentbalanceComponent', () => {
  let component: CurrentbalanceComponent;
  let fixture: ComponentFixture<CurrentbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidoffersComponent } from './prepaidoffers.component';

describe('PrepaidoffersComponent', () => {
  let component: PrepaidoffersComponent;
  let fixture: ComponentFixture<PrepaidoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

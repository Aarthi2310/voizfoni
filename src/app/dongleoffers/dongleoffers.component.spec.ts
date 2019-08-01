import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleoffersComponent } from './dongleoffers.component';

describe('DongleoffersComponent', () => {
  let component: DongleoffersComponent;
  let fixture: ComponentFixture<DongleoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DongleoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DongleoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

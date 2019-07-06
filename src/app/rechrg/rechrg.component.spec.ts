import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechrgComponent } from './rechrg.component';

describe('RechrgComponent', () => {
  let component: RechrgComponent;
  let fixture: ComponentFixture<RechrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

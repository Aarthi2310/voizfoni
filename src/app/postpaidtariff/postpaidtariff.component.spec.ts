import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidtariffComponent } from './postpaidtariff.component';

describe('PostpaidtariffComponent', () => {
  let component: PostpaidtariffComponent;
  let fixture: ComponentFixture<PostpaidtariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpaidtariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidtariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

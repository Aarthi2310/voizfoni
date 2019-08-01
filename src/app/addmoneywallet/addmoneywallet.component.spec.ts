import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoneywalletComponent } from './addmoneywallet.component';

describe('AddmoneywalletComponent', () => {
  let component: AddmoneywalletComponent;
  let fixture: ComponentFixture<AddmoneywalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmoneywalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoneywalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

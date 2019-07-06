import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpaidoffersComponent } from './postpaidoffers.component';

describe('PostpaidoffersComponent', () => {
  let component: PostpaidoffersComponent;
  let fixture: ComponentFixture<PostpaidoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpaidoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpaidoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

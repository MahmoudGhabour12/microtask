import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailComponent } from './adddetail.component';

describe('AdddetailComponent', () => {
  let component: AdddetailComponent;
  let fixture: ComponentFixture<AdddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

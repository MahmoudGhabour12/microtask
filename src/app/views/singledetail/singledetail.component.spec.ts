import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledetailComponent } from './singledetail.component';

describe('SingledetailComponent', () => {
  let component: SingledetailComponent;
  let fixture: ComponentFixture<SingledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

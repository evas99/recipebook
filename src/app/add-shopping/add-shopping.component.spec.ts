import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingComponent } from './add-shopping.component';

describe('AddShoppingComponent', () => {
  let component: AddShoppingComponent;
  let fixture: ComponentFixture<AddShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

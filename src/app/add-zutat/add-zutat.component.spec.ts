import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZutatComponent } from './add-zutat.component';

describe('AddZutatComponent', () => {
  let component: AddZutatComponent;
  let fixture: ComponentFixture<AddZutatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZutatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

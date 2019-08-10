import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectZutatComponent } from './select-zutat.component';

describe('SelectZutatComponent', () => {
  let component: SelectZutatComponent;
  let fixture: ComponentFixture<SelectZutatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectZutatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectZutatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

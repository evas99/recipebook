import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZutatenComponent } from './zutaten.component';

describe('ZutatenComponent', () => {
  let component: ZutatenComponent;
  let fixture: ComponentFixture<ZutatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZutatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZutatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInput } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddRecipeComponent } from './add-recipe.component';

describe('AddRecipeComponent', () => {
  let component: AddRecipeComponent;
  let fixture: ComponentFixture<AddRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

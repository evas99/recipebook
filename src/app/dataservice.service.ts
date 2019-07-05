import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  recipeSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipe: Observable<Recipe[]> = this.recipeSubject.asObservable();

  addNewRecipe(recipe: Recipe){
    const recipeValue = this.recipeSubject.value;
    recipeValue.push(recipe);
    this.recipeSubject.next(recipeValue);
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from './recipe';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  recipeSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipe: Observable<Recipe[]> = this.recipeSubject.asObservable();

  zutatenSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  zutaten: Observable<string[]> = this.zutatenSubject.asObservable();

  shoppingSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  shoppingList: Observable<string[]> = this.zutatenSubject.asObservable();

  addNewZutat(zutat: string){
    const zutatValue = this.zutatenSubject.value;
    zutatValue.push(zutat);
    this.zutatenSubject.next(zutatValue);
  }

  addNewRecipe(recipe: Recipe){
    const recipeValue = this.recipeSubject.value;
    recipeValue.push(recipe);
    this.recipeSubject.next(recipeValue);
  }

  getRecipe(id: number): Recipe {
    var recipeArray;
    this.recipe.subscribe(el => recipeArray = el);
    var found = recipeArray.find(function(element){
        if (element.id == id){
          return element;
        }         
      });
    // console.log("found: "+ JSON.stringify(found));
    return found; 
  }

  addZutatToShoppingList(zutaten: string[]){
    zutaten.forEach(element => {
      const shoppingValue = this.shoppingSubject.value;
      shoppingValue.push(element);
      this.shoppingSubject.next(shoppingValue);
    });
  }

  constructor() {
    var demoZutaten: string[] = ["Mehl", "Zucker", "Butter", "Eier"];
    this.addNewRecipe(<Recipe> {name: "ObservableKuchen", id: 10, img: "", zubereitung: "einfach", zutaten: demoZutaten });
    var zArray: string[] = ["Mehl", "Zucker", "Eier", "Butter", "Apfel"];
    zArray.forEach(element => {
      this.addNewZutat(element);
    });

   }
}

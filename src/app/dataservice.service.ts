import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from './recipe';
import { element } from 'protractor';
import { Zutat } from './zutat';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  recipeSubject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipe: Observable<Recipe[]> = this.recipeSubject.asObservable();

  zutatenSubject: BehaviorSubject<Zutat[]> = new BehaviorSubject<Zutat[]>([]);
  zutaten: Observable<Zutat[]> = this.zutatenSubject.asObservable();

  shoppingSubject: BehaviorSubject<Zutat[]> = new BehaviorSubject<Zutat[]>([]);
  shoppingList: Observable<Zutat[]> = this.shoppingSubject.asObservable();

  addNewZutat(zutat: Zutat){
    const zutatValue = this.zutatenSubject.value;
    zutatValue.push(zutat);
    this.zutatenSubject.next(zutatValue);
  }

  getIndexForRecipe(recipeOb: Observable<Recipe[]>): number {
    var recipeAr;
    recipeOb.subscribe(t => recipeAr = t);
    return recipeAr.length;
  }

  addNewRecipe(addingRecipe: Recipe){
    addingRecipe.id = this.getIndexForRecipe(this.recipe);
    const recipeValue = this.recipeSubject.value;
    recipeValue.push(addingRecipe);
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
    return found; 
  }

  addZutatToShoppingList(shoppingArray: Zutat[]){
    console.log("Hello from adding Zutat to Shopping List in DataService");
    shoppingArray.forEach(element => {
      console.log(element);
    });
    shoppingArray.forEach(element => {
      const shoppingValue = this.shoppingSubject.value;
      shoppingValue.push(element);
      this.shoppingSubject.next(shoppingValue);
    });
  }

  constructor() {
    // var demoZutaten: string[] = ["obserZutat"];
    var demoZutaten: Zutat[] = [];
    this.addNewRecipe(<Recipe> {name: "ObservableKuchen", img: "", zubereitung: "einfach", zutaten: demoZutaten });
    // ["Apfel", "Mehl", "Zucker", "Eier"].forEach(z => {
    //   this.addNewZutat(z);
    // });

   }
}

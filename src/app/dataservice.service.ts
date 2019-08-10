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

  tempZutatenSubject: BehaviorSubject<Zutat[]> = new BehaviorSubject<Zutat[]>([]);
  tempZutaten: Observable<Zutat[]> = this.tempZutatenSubject.asObservable();

  shoppingSubject: BehaviorSubject<Zutat[]> = new BehaviorSubject<Zutat[]>([]);
  shoppingList: Observable<Zutat[]> = this.shoppingSubject.asObservable();

  categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  categories: Observable<string[]> = this.categoriesSubject.asObservable();

  addTempZutat(zutat: Zutat){
    const tempZutatValue = this.tempZutatenSubject.value;
    tempZutatValue.push(zutat);
    this.tempZutatenSubject.next(tempZutatValue);
  }

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

  addToShoppingList(tempzutaten: Zutat[]){
    var shoppingArray: Zutat[];
    this.shoppingList.subscribe(element => shoppingArray = element);
    console.log("adding Zutat to Shopping List: ");
    // var tempzutaten = this.actualRecipe.zutaten;

    tempzutaten.forEach(element => {
      var isTrue: boolean = false;
      for (let index = 0; index < shoppingArray.length; index++) {
        if(element.name == shoppingArray[index].name){
          // console.log("Found matching element: "+ this.shoppingList[index].name);
          var sum = shoppingArray[index].quantity + element.quantity;
          shoppingArray[index].quantity = sum;
          // console.log("Shopping: "+this.shoppingList[index].name +" "+ this.shoppingList[index].quantity);
          // console.log("Element: "+element.name +" "+ element.quantity);
          // console.log("sum: "+element.quantity+this.shoppingList[index].quantity);
          // tempzutaten.splice(tempzutaten.indexOf(element),1); //id, anzahl elements to remove
          isTrue = true;
          break;
        } else {
          // this.dataService.addZutatToShoppingList([element]);
        }
        // this.dataService.addZutatToShoppingList([element]);
      }
      if (!isTrue){
        this.addSingleZutatToShoppingList(element);
      }
    });
  }

  private addZutatToShoppingList(tempShoppingArray: Zutat[]){
    // console.log("Hello from adding Zutat to Shopping List in DataService");
    // shoppingArray.forEach(element => {
    //   console.log(element);
    // });
    tempShoppingArray.forEach(el => {
        var tempZutatToStore = <Zutat>{
          name: el.name, 
          category: el.category, 
          unit: el.unit, 
          quantity: el.quantity
        }
        const shoppingValue = this.shoppingSubject.value;
        shoppingValue.push(tempZutatToStore);
        this.shoppingSubject.next(shoppingValue);
    });
    
  }

  private addSingleZutatToShoppingList(tempShoppingElement: Zutat){
    if(tempShoppingElement != null){
      var tempZutatToStore = <Zutat>{
        name: tempShoppingElement.name, 
        category: tempShoppingElement.category, 
        unit: tempShoppingElement.unit, 
        quantity: tempShoppingElement.quantity
      };
      const shoppingValue = this.shoppingSubject.value;
      shoppingValue.push(tempZutatToStore);
      this.shoppingSubject.next(shoppingValue);
    }
  }

  initCategories(){
    var tempArr: string[] = ["Obst", "Gemüse", "Backen", "Gewürze"];
    tempArr.forEach(element => {
      const catValue = this.categoriesSubject.value;
      catValue.push(element);
      // console.log("hello from initCategories: "+element);
      this.categoriesSubject.next(catValue);
    });
  }

  initDemoRecipes(){
    var tempZutat = this.getZutat("Mehl");
    console.log("hello from init Demo "+tempZutat);
    tempZutat.quantity = 300;
    var tempZutat2 = this.getZutat("Zucker");
    tempZutat2.quantity = 250;
    var tempZutat3 = this.getZutat("Milch");
    tempZutat3.quantity = 200;
    var tempZutat4 = this.getZutat("Apfel");
    tempZutat4.quantity = 100;
    var tempZutat5 = this.getZutat("Erdbeeren");
    tempZutat5.quantity = 100;
    var demoZutaten: Zutat[] = [tempZutat, tempZutat2, tempZutat3, tempZutat4];
    var demoZutaten2: Zutat[] = [tempZutat, tempZutat2, tempZutat3, tempZutat5];
    var descString = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that’s what you see at a toy store. And you must think you’re in a toy store, because you’re here shopping for an infant named Jeb.";
    
    var imgString = "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT6X1w4dbHcgj_O4hByDeHOYMIdanO-dqVvcagsWlXQbfGkzmTV&sp=94b415816f3fc3f0424dc7e9df495e16&anticache=648710";
    var img2 = "data:image/jpeg;base64,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";
    
    this.addNewRecipe(<Recipe> {
      name: "Apfelkuchen", 
      img: imgString, 
      description: descString, 
      zubereitung: descString,
      zutaten: demoZutaten });
    this.addNewRecipe(<Recipe> {
      name: "Erdbeerkuchen", 
      img: img2, 
      description: descString, 
      zubereitung: descString,
      zutaten: demoZutaten2 });
  }

  initDemoZutaten(){
    this.addNewZutat(<Zutat> {name: "Mehl", unit:"Gramm", category: "Backen"});
    this.addNewZutat(<Zutat> {name: "Zucker", unit:"Gramm", category: "Backen"});
    this.addNewZutat(<Zutat> {name: "Milch", unit:"Mililiter", category: "Backen"});
    this.addNewZutat(<Zutat> {name: "Salz", unit:"Gramm", category: "Gewürze"});
    this.addNewZutat(<Zutat> {name: "Möhren", unit:"Gramm", category: "Gemüse"});
    this.addNewZutat(<Zutat> {name: "Erdbeeren", unit:"Gramm", category: "Obst"});
    this.addNewZutat(<Zutat> {name: "Apfel", unit:"Gramm", category: "Obst"});
  }

  getZutat(zutatName:string): Zutat{
    var zutatArray;
    this.zutaten.subscribe(el => zutatArray = el);
    var found = zutatArray.find(function(element){
        if (element.name == zutatName){
          console.log(element.name);
          return element;
        } else {
          console.log("Zutat not found.");
          return null;
        }         
      });
    return found; 
  }

  initDemoShoppingList(){
    var actual = this.getZutat("Mehl");
    if(actual != null){
      var tempZutatToStore = <Zutat>{name: actual.name, category: actual.category, unit: actual.unit, quantity: actual.quantity};
      console.log("hello from init Demo "+actual);
      tempZutatToStore.quantity = 300;
      this.addZutatToShoppingList([tempZutatToStore]);
    }
  }

  constructor() {
    this.initCategories();
    this.initDemoZutaten();
    this.initDemoRecipes();
    this.initDemoShoppingList();
   }
}

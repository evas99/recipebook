import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Zutat } from '../zutat';
import { MatTableDataSource } from '@angular/material/table';
import { ZutatenComponent } from '../zutaten/zutaten.component';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  styleUrls: ['./rezept.component.css']
})
export class RezeptComponent implements OnInit {

  zutatenListe: Zutat[];
  recipeListe: Recipe[];
  actualRecipe: Recipe;
  shoppingList: Zutat[];

  constructor(
    private dataService: DataserviceService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
      // this.actualRecipe = this.recipeListe[0];
      // console.log(this.actualRecipe.name);
    }


  public getRecipe(): Recipe {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.dataService.getRecipe(id);
  }

  addZutatenToShoppingList(){
    var tempzutaten = this.actualRecipe.zutaten;
    this.dataService.addToShoppingList(tempzutaten);
  }

  // addToShoppingList(tempzutaten: Zutat[]){
  //   console.log("adding Zutat to Shopping List: ");
  //   // var tempzutaten = this.actualRecipe.zutaten;

  //   tempzutaten.forEach(element => {
  //     var isTrue: boolean = false;
  //     for (let index = 0; index < this.shoppingList.length; index++) {
  //       if(element.name == this.shoppingList[index].name){
  //         // console.log("Found matching element: "+ this.shoppingList[index].name);
  //         var sum = this.shoppingList[index].quantity + element.quantity;
  //         this.shoppingList[index].quantity = sum;
  //         // console.log("Shopping: "+this.shoppingList[index].name +" "+ this.shoppingList[index].quantity);
  //         // console.log("Element: "+element.name +" "+ element.quantity);
  //         // console.log("sum: "+element.quantity+this.shoppingList[index].quantity);
  //         // tempzutaten.splice(tempzutaten.indexOf(element),1); //id, anzahl elements to remove
  //         isTrue = true;
  //         break;
  //       } else {
  //         // this.dataService.addZutatToShoppingList([element]);
  //       }
  //       // this.dataService.addZutatToShoppingList([element]);
  //     }
  //     if (!isTrue){
  //       this.dataService.addSingleZutatToShoppingList(element);
  //     }
  //   });
  // }

  // addZutatToShoppingList(array: string[]){
  //   this.dataService.addZutatToShoppingList(array);
  //   console.log("adding Zutat to Shopping List: " + array[0]);
  // }

  displayedColumns: string[] = ['name','quantity','unit'];
  dataSource = new MatTableDataSource(this.zutatenListe);

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
    this.actualRecipe = this.getRecipe();
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);

    this.dataSource.data = this.actualRecipe.zutaten; 
  }

}

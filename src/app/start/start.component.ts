import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { RecipeOverviewComponent } from '../recipe-overview/recipe-overview.component';
import { Zutat } from '../zutat';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  rezepte: Recipe[];
  zutaten: Zutat[];
  tempzutaten: Zutat[] = [];
  categories: string[];

  addRecipe(recName, imgSrc, recZubereitung, zutatArray){
    var actual = <Recipe>{name: recName, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
    this.dataService.addNewRecipe(actual);
  }

  // addZutat(zuName: string, zuQuantity: number){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, quantity: zuQuantity});
  // }

  addZutat(zuName: string, zuUnit: string, zuCategory: string){
    this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  }

  tempAddZutat(zutat: Zutat, zuQuantity: number){
    console.log("hello from tempAddZutat "+zutat);
    zutat.quantity = zuQuantity; 
    this.tempzutaten.push(zutat);
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.categories.subscribe(element => this.categories = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

}

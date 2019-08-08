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

  addRecipe(recName, imgSrc, recZubereitung, zutatArray){
    var actual = <Recipe>{name: recName, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
    this.dataService.addNewRecipe(actual);
  }

  // addZutat(zuName: string, zuQuantity: number){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, quantity: zuQuantity});
  // }

  addZutat(zuName: string, zuUnit: string){
    this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit});
  }

  tempAddZutat(zuName: string, zuQuantity: number){
    console.log("hello from tempAddZutat "+zuName);
    this.tempzutaten.push(<Zutat>{name: zuName, quantity: zuQuantity});
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

}

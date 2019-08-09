import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { RecipeOverviewComponent } from '../recipe-overview/recipe-overview.component';
import { Zutat } from '../zutat';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddZutatComponent } from '../add-zutat/add-zutat.component';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private dataService: DataserviceService, private route: ActivatedRoute, public dialog: MatDialog) { }

  rezepte: Recipe[];
  zutaten: Zutat[];
  tempzutaten: Zutat[] = [];
  categories: string[];

  // addRecipe(recName, imgSrc, recZubereitung, zutatArray){
  //   var actual = <Recipe>{name: recName, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
  //   this.dataService.addNewRecipe(actual);
  // }

  // addZutat(zuName: string, zuQuantity: number){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, quantity: zuQuantity});
  // }

  // addZutat(zuName: string, zuUnit: string, zuCategory: string){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  // }

  // tempAddZutat(zutat: Zutat, zuQuantity: number){
  //   console.log("hello from tempAddZutat "+zutat);
  //   zutat.quantity = zuQuantity; 
  //   this.tempzutaten.push(zutat);
  // }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.categories.subscribe(element => this.categories = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

  openAddRecipeDialog() {
    this.dialog.open(AddRecipeComponent);
  }

}

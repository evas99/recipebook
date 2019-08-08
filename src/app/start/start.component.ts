import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { RecipeOverviewComponent } from '../recipe-overview/recipe-overview.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  rezepte: Recipe[];
  zutaten: string[];
  tempzutaten: string[] = [];

  addRecipe(recName, imgSrc, recZubereitung, zutat){
    var zutatArray: string[] = [zutat];
    var actual = <Recipe>{name: recName, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
    this.dataService.addNewRecipe(actual);
  }

  addZutat(zutatString: string){
    this.dataService.addNewZutat(zutatString);
  }

  tempAddZutat(selected: string){
    this.tempzutaten.push(selected);
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

}

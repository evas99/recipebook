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

  addRecipe(recName, recID, imgSrc, recZubereitung){
    this.rezepte.push(<Recipe>{name: recName, id: recID, img: imgSrc, zubereitung: recZubereitung});
    this.rezepte.forEach(element => {
      console.log(element.name);
    });
    // console.log(this.rezepte[0]);
  }

  addZutat(zutatString){
    this.zutaten.push(zutatString);
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

}

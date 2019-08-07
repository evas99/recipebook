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
  recipeName;

  addRecipe(recName){
    this.recipeName = recName;
    this.rezepte.push(<Recipe>{name: recName});
    console.log(this.rezepte[0]);
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    // this.rezepte.push(<Recipe>{name: "Erdbeerkuchen", id: 12},<Recipe>{name: "Käsekuchen", id: 11});
    this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
    // this.rezepte.forEach(element => {
    //   console.log(element.name + " id: " + element.id);
    // });
  }

}

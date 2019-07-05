import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  rezeptName = "ersetzen";
  rezeptKategorie = "ersetzen";
  zutat = "Zutat einfügen";

  rezepte: Recipe[];

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
  }

}

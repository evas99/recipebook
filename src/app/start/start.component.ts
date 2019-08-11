import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
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

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.categories.subscribe(element => this.categories = element);
  }

  //add a new recipe to overview
  openAddRecipeDialog() {
    this.dialog.open(AddRecipeComponent);
  }
}

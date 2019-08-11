import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { Zutat } from '../zutat';
import { Input } from '@angular/compiler/src/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SelectZutatComponent } from '../select-zutat/select-zutat.component';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  @ViewChild('zuQuantity', {static:false}) htmlQuantity: ElementRef;
  
  rezepte: Recipe[];
  zutaten: Zutat[];
  tempzutaten: Zutat[];
  categories: string[];
  
  constructor(private dataService: DataserviceService, private route: ActivatedRoute, public dialog: MatDialog) { }

  //add new recipe to recipe-observable
  addRecipe(recName, recDesc, imgSrc, recZubereitung, zutatArray){
    var actual = <Recipe>{name: recName, description: recDesc, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
    this.dataService.addNewRecipe(actual);
  }

  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.categories.subscribe(element => this.categories = element);
    this.dataService.tempZutaten.subscribe(element => this.tempzutaten = element); 
  }
  //open dialog to select zutaten
  openAddZutatDialog(zutat: Zutat) {
    this.dialog.open(SelectZutatComponent);
  }
}

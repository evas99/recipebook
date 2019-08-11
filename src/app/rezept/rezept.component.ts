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

  //to create a mat-table
  displayedColumns: string[] = ['name','quantity','unit'];
  dataSource = new MatTableDataSource(this.zutatenListe);

  constructor(
    private dataService: DataserviceService,
    private route: ActivatedRoute,
  ) {}

  //get recipe from recipe-observable by routing with id
  public getRecipe(): Recipe {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.dataService.getRecipe(id);
  }

  //add all Zutaten of recipe to shopping list
  addZutatenToShoppingList(){
    var tempzutaten = this.actualRecipe.zutaten;
    this.dataService.addToShoppingList(tempzutaten);
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
    this.actualRecipe = this.getRecipe();
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);

    this.dataSource.data = this.actualRecipe.zutaten; 
  }
}

import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  styleUrls: ['./rezept.component.css']
})
export class RezeptComponent implements OnInit {

  zutatenListe: string[];
  recipeListe: Recipe[];
  actualRecipe: Recipe;
  shoppingList: string[];

  constructor(
    private dataService: DataserviceService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
      // this.actualRecipe = this.recipeListe[0];
      // console.log(this.actualRecipe.name);
    }


  public getRecipe(): Recipe {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.dataService.getRecipe(id);
  }

  addZutatToShoppingList(array: string[]){
    this.dataService.addZutatToShoppingList(array);
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
    this.actualRecipe = this.getRecipe();
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);
    // this.dataService.addNewRecipe(<Recipe>{name: "Pflaumenkuchen", id: 13});
  }

}

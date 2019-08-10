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

  constructor(private dataService: DataserviceService, private route: ActivatedRoute, public dialog: MatDialog) { }

@ViewChild('zuQuantity', {static:false}) htmlQuantity: ElementRef;
@ViewChild('selection', {static:false}) htmlSelection: ElementRef;
  
  rezepte: Recipe[];
  zutaten: Zutat[];
  tempzutaten: Zutat[];
  categories: string[];

  addRecipe(recName, recDesc, imgSrc, recZubereitung, zutatArray){
    var actual = <Recipe>{name: recName, description: recDesc, img: imgSrc, zubereitung: recZubereitung, zutaten: zutatArray};
    this.dataService.addNewRecipe(actual);
  }

  // addZutat(zuName: string, zuQuantity: number){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, quantity: zuQuantity});
  // }

  // addZutat(zuName: string, zuUnit: string, zuCategory: string){
  //   this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  // }

  // tempAddZutat(zutat: Zutat){
  //   console.log("hello from tempAddZutat "+zutat);
  //   zutat.quantity = Number(this.htmlQuantity.nativeElement.value); 
  //   this.tempzutaten.push(zutat);

  //   this.htmlQuantity.nativeElement.value = "";
  //   // this.htmlSelection.nativeElement.selected = "";
  // }


  ngOnInit() {
    this.dataService.recipe.subscribe(recipes => this.rezepte = recipes);
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.categories.subscribe(element => this.categories = element);
    this.dataService.tempZutaten.subscribe(element => this.tempzutaten = element); 
    // this.dataService.addNewRecipe(<Recipe>{name: "Erdbeerkuchen", id: 12});
  }

  openAddZutatDialog(zutat: Zutat) {
    this.dialog.open(SelectZutatComponent);
  }
}

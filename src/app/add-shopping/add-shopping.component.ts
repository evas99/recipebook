import { Component, OnInit, Inject } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.component.html',
  styleUrls: ['./add-shopping.component.css']
})
export class AddShoppingComponent implements OnInit {

  constructor(private dataService: DataserviceService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  zutatenListe: Zutat[];
  categories: string[];
  shoppingList: Zutat[];

  addZutat(zuName: string, zuUnit: string, zuCategory: string){
    this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  }

  addZutatToShoppingList(quantity){
    var tempZutat = this.data;
    tempZutat.quantity = Number(quantity);
    console.log("hello from add-shopping: tempZutat = "+tempZutat.name + " "+tempZutat.quantity);
    this.dataService.addToShoppingList([tempZutat]);
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
    this.dataService.categories.subscribe(element => this.categories = element);
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);
  }

}

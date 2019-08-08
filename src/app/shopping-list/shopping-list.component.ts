import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  shoppingList: Zutat[];

  addZutatToShoppingList(array: Zutat[]){
    this.dataService.addZutatToShoppingList(array);
    // console.log("adding Zutat to Shopping List: " + array[0]);
  }

  ngOnInit() {
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);
  }

}

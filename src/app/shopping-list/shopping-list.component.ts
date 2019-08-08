import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  shoppingList: string[];

  addZutatToShoppingList(array: string[]){
    this.dataService.addZutatToShoppingList(array);
    // console.log("adding Zutat to Shopping List: " + array[0]);
  }

  ngOnInit() {
    this.dataService.shoppingList.subscribe(element => this.shoppingList = element);
  }

}

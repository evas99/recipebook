import { Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MatSort, MatTableDataSource } from '@angular/material';

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

  displayedColumns: string[] = ['name','quantity', 'category'];
  dataSource = new MatTableDataSource(this.shoppingList);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataService.shoppingList.subscribe(element => {
      this.shoppingList = element;
      console.log(this.shoppingList);
      this.dataSource.data = this.shoppingList;   
      this.dataSource.sort = this.sort;
    });
  }
}

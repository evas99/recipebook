import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MatTableDataSource, MatSort, Sort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { connect } from 'net';
import { Observable } from 'rxjs';
import { disconnect } from 'cluster';
import { ActivatedRoute } from '@angular/router';
import { AddZutatComponent } from '../add-zutat/add-zutat.component';
import { AddShoppingComponent } from '../add-shopping/add-shopping.component';

@Component({
  selector: 'app-zutaten',
  templateUrl: './zutaten.component.html',
  styleUrls: ['./zutaten.component.css']
})

export class ZutatenComponent implements OnInit {

  constructor(private dataService: DataserviceService, private route: ActivatedRoute, public dialog: MatDialog) { }

  zutatenListe: Zutat[];
  categories: string[];

  //for creating a mat-table
  displayedColumns: string[] = ['name', 'unit', 'category', 'addBtn'];
  dataSource = new MatTableDataSource(this.zutatenListe);

  //add new Zutat to zutat-observable in dataservice
  addZutat(zuName: string, zuUnit: string, zuCategory: string){
    this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => {
      this.zutatenListe = zutaten; 
      this.dataSource.data = this.zutatenListe;   
      this.dataSource.sort = this.sort;
    });
    this.dataService.categories.subscribe(element => this.categories = element);
  }

  //open a dialog to add a zutat (name, unit, categorie)
  openAddZutatDialog() {
    this.dialog.open(AddZutatComponent);
  }

  //open dialog to add a single zutat to shopping list
  openZutatToShoppingDialog(zutat: Zutat) {
    this.dialog.open(AddShoppingComponent, { data: zutat });
  }
}

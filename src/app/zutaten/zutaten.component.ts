import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MatTableDataSource, MatSort, Sort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { connect } from 'net';
import { Observable } from 'rxjs';
import { disconnect } from 'cluster';

@Component({
  selector: 'app-zutaten',
  templateUrl: './zutaten.component.html',
  styleUrls: ['./zutaten.component.css']
})

export class ZutatenComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  zutatenListe: Zutat[];

  displayedColumns: string[] = ['name', 'category'];
  dataSource = new MatTableDataSource(this.zutatenListe);

  addZutat(zutat: Zutat){
    this.dataService.addNewZutat(zutat);
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => {
      this.zutatenListe = zutaten; 
      this.dataSource.data = this.zutatenListe;   
      this.dataSource.sort = this.sort;
    });
  }
}

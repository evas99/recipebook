import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { connect } from 'net';
import { Observable } from 'rxjs';
import { disconnect } from 'cluster';

export class ZutatenDataSource implements DataSource<any>{
  constructor(private dataService: DataserviceService){
  }
  connect(): Observable<Zutat[]>{return this.dataService.zutaten};
  disconnect(){};
} 

@Component({
  selector: 'app-zutaten',
  templateUrl: './zutaten.component.html',
  styleUrls: ['./zutaten.component.css']
})

export class ZutatenComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  zutatenListe: Zutat[];
  // dataSource = this.zutatenListe;
  
  // ELEMENT_DATA: Zutat[] = this.zutatenListe;

  // displayedColoums: string[] = ['name', 'category'];
  // dataSource =  this.ELEMENT_DATA;

  displayedColumns: string[] = ['name', 'category'];
  dataSource = new ZutatenDataSource(this.dataService);


  addZutat(zutat: Zutat){
    this.dataService.addNewZutat(zutat);
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
  }

}

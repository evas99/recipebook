import { Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-add-zutat',
  templateUrl: './add-zutat.component.html',
  styleUrls: ['./add-zutat.component.css']
})
export class AddZutatComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  zutatenListe: Zutat[];
  categories: string[];

  addZutat(zuName: string, zuUnit: string, zuCategory: string){
    this.dataService.addNewZutat(<Zutat>{name: zuName, unit: zuUnit, category: zuCategory});
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
    this.dataService.categories.subscribe(element => this.categories = element);
  }

}

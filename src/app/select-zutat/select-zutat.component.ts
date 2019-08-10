import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Zutat } from '../zutat';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AddZutatComponent } from '../add-zutat/add-zutat.component';

@Component({
  selector: 'app-select-zutat',
  templateUrl: './select-zutat.component.html',
  styleUrls: ['./select-zutat.component.css']
})
export class SelectZutatComponent implements OnInit {

  constructor(private dataService: DataserviceService, private route: ActivatedRoute, public dialog: MatDialog) { }

  zutaten: Zutat[];
  tempZutaten: Zutat[];

  @ViewChild('htmlQuantity', {static:false}) htmlQuantity: ElementRef;

  tempAddZutat(zutat: Zutat){
    if (zutat != null){
      // console.log("hello from tempAddZutat "+zutat);
      zutat.quantity = Number(this.htmlQuantity.nativeElement.value); 
  
      this.dataService.addTempZutat(zutat);
  
      this.htmlQuantity.nativeElement.value = "";
      // this.htmlSelection.nativeElement.selected = "";
    } else {
      console.log("Please Select a Zutat.");
    }

  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(element => this.zutaten = element);
    this.dataService.tempZutaten.subscribe(element => this.tempZutaten = element);
  }

  openAddZutatDialog() {
    this.dialog.open(AddZutatComponent);
  }

}

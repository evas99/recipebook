import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-zutaten',
  templateUrl: './zutaten.component.html',
  styleUrls: ['./zutaten.component.css']
})
export class ZutatenComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  zutatenListe: string[];

  addZutat(zutat: string){
    this.dataService.addNewZutat(zutat);
  }

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
  }

}

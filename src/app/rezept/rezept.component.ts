import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  styleUrls: ['./rezept.component.css']
})
export class RezeptComponent implements OnInit {

  constructor(private dataService: DataserviceService) { }

  zutatenListe: string[];

  rezeptname = "Mein Rezept";
  zutatenliste = ["Mehl", "Zucker", "Milch", "Eier"];

  ngOnInit() {
    this.dataService.zutaten.subscribe(zutaten => this.zutatenListe = zutaten);
  }

}

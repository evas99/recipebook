import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
  styleUrls: ['./rezept.component.css']
})
export class RezeptComponent implements OnInit {

  constructor() { }

  rezeptname = "Mein Rezept";
  zutatenliste = ["Mehl", "Zucker", "Milch", "Eier"];

  ngOnInit() {
  }


}

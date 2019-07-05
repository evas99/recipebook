import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.css']
})
export class RecipeOverviewComponent implements OnInit {

  constructor() { }

  rezeptName = "ersetzen";
  rezeptKategorie = "ersetzen";
  zutat = "Zutat einfügen";

  ngOnInit() {
  }

}

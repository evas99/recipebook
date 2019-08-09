import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSelectModule, MatToolbarModule, MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
import { RezeptComponent } from './rezept/rezept.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { StartComponent } from './start/start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const modules = [ 
  BrowserAnimationsModule, 
  BrowserModule,
  MatButtonModule, 
  MatCardModule, 
  MatSelectModule, 
  MatToolbarModule, 
  MatInputModule,
  MatTableModule,
  MatSortModule
 ];

@NgModule({
  declarations: [
    AppComponent,
    RezeptComponent,
    RecipeOverviewComponent,
    ZutatenComponent,
    StartComponent,
    ShoppingListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

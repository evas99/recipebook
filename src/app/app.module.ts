import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatSelectModule, MatToolbarModule, MatInputModule, MatTableModule, MatSortModule, MatFormFieldModule, MatDialog, MatDialogModule } from '@angular/material';
import { RezeptComponent } from './rezept/rezept.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { StartComponent } from './start/start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddZutatComponent } from './add-zutat/add-zutat.component';
import { AddShoppingComponent } from './add-shopping/add-shopping.component';
import { SelectZutatComponent } from './select-zutat/select-zutat.component';

const modules = [ 
  BrowserAnimationsModule, 
  BrowserModule,
  MatButtonModule, 
  MatCardModule, 
  MatSelectModule, 
  MatToolbarModule, 
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatDialogModule
 ];

@NgModule({
  declarations: [
    AppComponent,
    RezeptComponent,
    ZutatenComponent,
    StartComponent,
    ShoppingListComponent,
    AddRecipeComponent,
    AddZutatComponent,
    AddShoppingComponent,
    SelectZutatComponent
  ],
  entryComponents: [
    AddShoppingComponent,
    SelectZutatComponent
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

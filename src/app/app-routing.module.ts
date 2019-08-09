import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RezeptComponent } from './rezept/rezept.component';
import { StartComponent } from './start/start.component';
import { ZutatenComponent } from './zutaten/zutaten.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddZutatComponent } from './add-zutat/add-zutat.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'start', component: StartComponent},
  { path: 'rezept', component: RezeptComponent},
  { path: 'rezept/:id', component:RezeptComponent},
  { path: 'zutaten', component: ZutatenComponent},
  { path: 'shoppingList', component: ShoppingListComponent},
  { path: 'add-recipe', component: AddRecipeComponent},
  { path: 'add-zutat', component: AddZutatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

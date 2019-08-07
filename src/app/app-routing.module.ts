import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RezeptComponent } from './rezept/rezept.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'rezept', component: RezeptComponent},
  { path: 'rezept/:id', component:RezeptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RezeptComponent } from './rezept/rezept.component';
import { StartComponent } from './start/start.component';
import { ZutatenComponent } from './zutaten/zutaten.component';

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'start', component: StartComponent},
  { path: 'rezept', component: RezeptComponent},
  { path: 'rezept/:id', component:RezeptComponent},
  { path: 'zutaten', component: ZutatenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';

const routes: Routes = [
  {
    path: '',                             // único componente por lo tanto ruta única
    component: CharactersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }

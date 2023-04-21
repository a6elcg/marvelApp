import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    // aplicando lazy loading para cargar el módulo
    path: 'marvel',
    loadChildren: () => import('./marvel/marvel.module').then(m => m.MarvelModule)
  },
  {
    path:'**',
    redirectTo: '/marvel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

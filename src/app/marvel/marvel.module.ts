import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// modulos
import { MarvelRoutingModule } from './marvel-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

// componentes
import { CharactersListComponent } from './pages/characters-list/characters-list.component';


@NgModule({
  declarations: [
    CharactersListComponent,
    
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class MarvelModule { }

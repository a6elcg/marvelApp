import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// TODO: modulos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// TODO: componentes
import { DialogComponent } from './components/dialog/dialog.component';

// TODO: pipes
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    DialogComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    // TODO: exportar componentes para poder ser utilizados en otros módulos
    DialogComponent,
    ImagePipe
  ]
})
export class SharedModule { }

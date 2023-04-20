import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modulos primeNg
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from "primeng/ripple";
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [
    ButtonModule,
    DialogModule,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    TableModule,
  ]
})
export class PrimeNgModule { }

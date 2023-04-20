import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/marvel/models/characters';
import { MarvelService } from 'src/app/marvel/services/marvel.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  @Input() display!: boolean;                       // boolean para abrir/cerrar el modal
  @Input() data!: Character;                           // data recibida para ser mostrada/modificada, contiene un personaje
  @Output() deleteSelf = new EventEmitter<any>();   // evento que permitirá saber qué hacer con el personaje (nada, editar, eliminar)
  
  constructor(
    private marvelService: MarvelService
  ) { }
  
  closeModal() {
    this.deleteSelf.emit();
  }

  editCharacter() {
    this.deleteSelf.emit(this.data);
  }

  deleteCharacter() {
    this.marvelService.deleteCharacter(this.data);
    this.closeModal();
  }

}

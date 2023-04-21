import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/marvel/models/characters';
import { MarvelService } from 'src/app/marvel/services/marvel.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
    `
      img {
        max-width: 100%;
        height: 50%;
      }
    `,
  ],
})
export class DialogComponent {
  @Input() display!: boolean; // boolean para abrir/cerrar el modal
  @Input() character!: Character; // data recibida para ser mostrada/modificada, contiene un personaje
  @Output() deleteSelf = new EventEmitter<any>(); // evento que permitirá saber qué hacer con el personaje (nada, editar, eliminar)

  enableEditButton: boolean = false; // habilitar botón de edición
  newName: string = '';

  constructor(private marvelService: MarvelService) {}

  // función para detectar cambios en input text
  onKeydown() {
    this.enableEditButton = true;
  }

  // función para capturar el nuevo nombre
  onInput(event: any) {
    this.newName = event.target.value;
  }

  // función para cerrar modal sin más acciones
  closeModal() {
    this.deleteSelf.emit();
  }

  // función para cerrar modal con edición de personaje
  editCharacter() {
    this.character.name = this.newName;
    this.deleteSelf.emit(this.character);
  }

  // función para cerrar modal y eliminar un personaje
  deleteCharacter() {
    this.marvelService.deleteCharacter(this.character);
    this.closeModal();
  }
}

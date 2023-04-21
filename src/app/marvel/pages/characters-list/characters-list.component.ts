import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/characters';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent implements OnInit {
  character!: Character; // almacenar un personaje para enviar al modal de detalle
  displayModal: boolean = false; // manejar el toggle del modal

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.getCharacters(); // ejecutar la función para consultar API
    // las suscripción está en el servicio ya que en él
    // se manipula el localStorage
  }

  // TODO: obtener los personajes del servicio
  get characters() {
    return this.marvelService.characters;
  }

  // TODO: función para abrir el modal de detalle, se envía la información del personaje
  // seleccionado mediante un Input en app-dialog
  characterDetail(event: any) {
    this.character = event.data;
    this.displayModal = true;
  }

  // TODO: función para leer parámetros de búsqueda para el filtrado en la tabla
  readValue(event: any) {
    return event.target.value;
  }

  // TODO: función para cerrar el modal validando si se hará o no una edición de personaje
  onClose(data?: Character) {
    // si se recibe data, significa que se solicita una edición de personaje
    if (data) {
      console.log('si entra');
      
      this.characters.map((character) => {
        if (character.id === data.id) {
          character.name = data.name;
        }
      });
      this.marvelService.updateData(this.characters);
    }
    
    this.displayModal = false;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Data, Response } from '../models/characters';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  // TODO: cadenas para conformar la API URL
  PUBLIC_KEY: string = '61e5d045abd6dcfd0db0ba8af003819e';
  URL: string = 'https://gateway.marvel.com:443/v1/public/characters?';
  HASH: string = '1a93eb2222e8a19fb4cc11d134613605';

  // arreglo para almacenar los resultados
  characters: Character[] = [];

  constructor(private http: HttpClient) {
    // de existir, obtener los resultados almacenados en el localStorage, de lo
    // contrario se inicializa como arreglo vacío
    this.characters = JSON.parse(localStorage.getItem('characters')!) || [];
  }

  // TODO: función para obtener los personajes de marvel sólo si no se encuentran
  // en el localStorage
  getCharacters() {
    if (this.characters.length == 0) {
      try {
        this.http
          .get<any>(
            `${this.URL}ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=100` // se obtiene un límite de 100 personajes
          )
          .subscribe((resp: Response) => {
            this.characters = resp.data.results;
            localStorage.setItem('characters', JSON.stringify(this.characters)); // almacenar el resultado en localStorage
          });
      } catch (error) {
        console.error('Error obteniendo personajes', error);
      }
    }
  }

  // TODO: función que permite actualizar los personajes del localStorage
  updateData(newData: Character[]) {
    this.characters = newData;
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  // TODO: función para crear nuevo arreglo de personajes eliminando el recibido
  deleteCharacter(data: Character) {
    let filteredCharacters: Character[];
    filteredCharacters = this.characters.filter(
      (character) => character.id !== data.id
    );
    this.updateData(filteredCharacters); // actualizar localStorage
  }
}

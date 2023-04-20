import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Data, Response } from '../models/characters';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  // TODO: cadenas para conformar la API URL
  PUBLIC_KEY: string = '61e5d045abd6dcfd0db0ba8af003819e';
  URL: string = 'https://gateway.marvel.com:443/v1/public/characters?';
  HASH: string = '1a93eb2222e8a19fb4cc11d134613605';

  // arreglo para almacenar los resultados
  results: Character[] = [];

  constructor(private http: HttpClient) {
    // de existir, obtener los resultados almacenados en el localStorage, de lo
    // contrario se inicializa como arreglo vacío
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
    console.log(this.results);
    
  }

  // TODO: función para obtener los personajes de marvel sólo si no se encuentran
  // en el localStorage
  async getCharacters() {
    if (this.results.length == 0) {
      console.log('entra');
      
      await this.http
        .get<any>(
          `${this.URL}ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=100` // se obtiene un límite de 100 personajes
        )
        .subscribe((resp: Response) => {
          this.results = resp.data.results;

          console.log(this.results, resp);
          
          localStorage.setItem('results', JSON.stringify(this.results)); // almacenar el resultado en localStorage
        });
    }
  }

  // TODO: función que permite actualizar los personajes del localStorage
  updateData(newData: Character[]) {
    localStorage.setItem('results', JSON.stringify(newData));
  }

  // TODO: función para crear nuevo arreglo de personajes eliminando el recibido
  deleteCharacter(data: Character) {
    let filteredCharacters: Character[];
    filteredCharacters = this.results.filter(
      (character) => character.id !== data.id
    );
    this.updateData(filteredCharacters); // actualizar localStorage
  }
}

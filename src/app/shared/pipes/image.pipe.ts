import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../../marvel/models/characters';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  // TODO: pipe para el manejo de imágenes, regresa un string de la ruta con la extensión concatenada
  transform(character: Character): string {
    return `${character.thumbnail.path}.${character.thumbnail.extension}`;
  }

}

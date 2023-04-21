import { Character } from 'src/app/marvel/models/characters';
import { ImagePipe } from './image.pipe';
import { Extension } from 'src/app/marvel/models/characters';

describe('ImagePipe', () => {
  const pipe = new ImagePipe();

  it('Crear instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deberá regresar la concatenación de 2 strings para la url de la imagen', () => {
    const mockCharacter: Character = {
      id: 1017100,
      name: 'A-Bomb (HAS)',
      description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
      modified: '2013-09-18T15:54:04-0400',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
        extension: Extension.Jpg,
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
      comics: {
        available: 4,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1017100/comics',
        items: [],
        returned: 4,
      },
      series: {
        available: 2,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1017100/series',
        items: [],
        returned: 2,
      },
      stories: {
        available: 7,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1017100/stories',
        items: [],
        returned: 7,
      },
      events: {
        available: 1,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1011334/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
            name: 'Secret Invasion',
          },
        ],
        returned: 1,
      },
      urls: [],
    };

    expect(pipe.transform(mockCharacter)).toBe(
      'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'
    );
  });
});

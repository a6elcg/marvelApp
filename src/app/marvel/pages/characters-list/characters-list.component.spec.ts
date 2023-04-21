import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharactersListComponent } from './characters-list.component';
import { MarvelService } from '../../services/marvel.service';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { Extension } from '../../models/characters';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  let marvelService: MarvelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PrimeNgModule, SharedModule],
      declarations: [CharactersListComponent],
      providers: [MarvelService],
    }).compileComponents();

    marvelService = TestBed.inject(MarvelService);

    // datos mock para hacer las pruebas
    const mockLocalStorage = [
      {
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
      },
      {
        id: 1011227,
        name: 'Amadeus Cho',
        description: '',
        modified: '2013-08-07T13:50:56-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581',
          extension: Extension.Jpg,
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011227',
        comics: {
          available: 149,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011227/comics',
          items: [],
          returned: 20,
        },
        series: {
          available: 34,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011227/series',
          items: [],
          returned: 20,
        },
        stories: {
          available: 176,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011227/stories',
          items: [],
          returned: 20,
        },
        events: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1011227/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 5,
        },
        urls: [],
      },
    ];

    marvelService.characters = mockLocalStorage; // se almacenan los datos mock en el servicio
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar la imagen, nombre y descripcion de los personajes mockLocalStorage', () => {
    // al ser 3 datos los que se muestran en la tabla, se esperaria obtener 6 td's
    let tableTDs = fixture.nativeElement.querySelectorAll('td');
    expect(tableTDs.length).toBe(6);
  });

  it('debería ejecutarse la función que abre el modal de detalle al hacer click en un personaje', fakeAsync(() => {
    // al hacer click en los td's se debería ejecutar la función characterDetail()
    spyOn(component, 'characterDetail');

    let button = fixture.nativeElement.querySelectorAll('td');
    button[0].click();    // se elige el primer personaje de la lista (contiene 2 del mockLocalStorage)

    expect(component.characterDetail).toHaveBeenCalled();

  }));
});

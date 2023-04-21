import { TestBed } from '@angular/core/testing';

import { MarvelService } from './marvel.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MarvelService', () => {
  let service: MarvelService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MarvelService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

});

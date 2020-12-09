import { TestBed } from '@angular/core/testing';

import { CrearPartidoService } from './crear-partido.service';

describe('CrearPartidoService', () => {
  let service: CrearPartidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPartidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

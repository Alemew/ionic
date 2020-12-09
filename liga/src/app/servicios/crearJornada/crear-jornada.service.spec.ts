import { TestBed } from '@angular/core/testing';

import { CrearJornadaService } from './crear-jornada.service';

describe('CrearJornadaService', () => {
  let service: CrearJornadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearJornadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

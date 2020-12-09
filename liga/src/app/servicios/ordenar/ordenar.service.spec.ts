import { TestBed } from '@angular/core/testing';

import { OrdenarService } from './ordenar.service';

describe('OrdenarService', () => {
  let service: OrdenarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

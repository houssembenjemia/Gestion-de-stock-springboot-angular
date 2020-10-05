import { TestBed } from '@angular/core/testing';

import { ScategorieService } from './scategorie.service';

describe('ScategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScategorieService = TestBed.get(ScategorieService);
    expect(service).toBeTruthy();
  });
});

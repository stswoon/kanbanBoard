import { TestBed } from '@angular/core/testing';

import { CanActivateBoardService } from './can-activate-board.service';

describe('CanActivateBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateBoardService = TestBed.get(CanActivateBoardService);
    expect(service).toBeTruthy();
  });
});

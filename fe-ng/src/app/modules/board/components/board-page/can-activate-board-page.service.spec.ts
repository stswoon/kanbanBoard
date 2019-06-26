import { TestBed } from '@angular/core/testing';

import { CanActivateBoardPageService } from './can-activate-board-page.service';

describe('CanActivateBoardPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateBoardPageService = TestBed.get(CanActivateBoardPageService);
    expect(service).toBeTruthy();
  });
});

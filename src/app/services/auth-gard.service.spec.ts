import { TestBed } from '@angular/core/testing';

import { CanActivateViaAuthGard } from './auth-gard.service';

describe('CanActivateViaAuthGard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateViaAuthGard = TestBed.get(CanActivateViaAuthGard);
    expect(service).toBeTruthy();
  });
});

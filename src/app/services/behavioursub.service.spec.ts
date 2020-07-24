import { TestBed } from '@angular/core/testing';

import { BehavioursubService } from './behavioursub.service';

describe('BehavioursubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehavioursubService = TestBed.get(BehavioursubService);
    expect(service).toBeTruthy();
  });
});

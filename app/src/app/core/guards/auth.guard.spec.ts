import { TestBed } from '@angular/core/testing';

import { AuthActivate } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthActivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthActivate);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

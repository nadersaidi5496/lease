import { TestBed, async, inject } from '@angular/core/testing';

import { SecuriteGuard } from './securite.guard';

describe('SecuriteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuriteGuard]
    });
  });

  it('should ...', inject([SecuriteGuard], (guard: SecuriteGuard) => {
    expect(guard).toBeTruthy();
  }));
});

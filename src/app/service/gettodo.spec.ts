import { TestBed } from '@angular/core/testing';

import { Gettodo } from './gettodo';

describe('Gettodo', () => {
  let service: Gettodo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gettodo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

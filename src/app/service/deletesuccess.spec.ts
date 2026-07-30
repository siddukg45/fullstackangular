import { TestBed } from '@angular/core/testing';

import { Deletesuccess } from './deletesuccess';

describe('Deletesuccess', () => {
  let service: Deletesuccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deletesuccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

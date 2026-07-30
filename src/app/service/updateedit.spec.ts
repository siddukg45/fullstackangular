import { TestBed } from '@angular/core/testing';

import { Updateedit } from './updateedit';

describe('Updateedit', () => {
  let service: Updateedit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Updateedit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

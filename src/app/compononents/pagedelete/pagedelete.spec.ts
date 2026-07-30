import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagedelete } from './pagedelete';

describe('Pagedelete', () => {
  let component: Pagedelete;
  let fixture: ComponentFixture<Pagedelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagedelete],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagedelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

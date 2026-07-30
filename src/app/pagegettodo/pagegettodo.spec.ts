import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagegettodo } from './pagegettodo';

describe('Pagegettodo', () => {
  let component: Pagegettodo;
  let fixture: ComponentFixture<Pagegettodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagegettodo],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagegettodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

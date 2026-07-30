import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageedit } from './pageedit';

describe('Pageedit', () => {
  let component: Pageedit;
  let fixture: ComponentFixture<Pageedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pageedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Pageedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

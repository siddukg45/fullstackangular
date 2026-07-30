import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagetodo } from './pagetodo';

describe('Pagetodo', () => {
  let component: Pagetodo;
  let fixture: ComponentFixture<Pagetodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagetodo],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagetodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

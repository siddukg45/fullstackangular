import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageregister } from './pageregister';

describe('Pageregister', () => {
  let component: Pageregister;
  let fixture: ComponentFixture<Pageregister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pageregister],
    }).compileComponents();

    fixture = TestBed.createComponent(Pageregister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagelogin } from './pagelogin';

describe('Pagelogin', () => {
  let component: Pagelogin;
  let fixture: ComponentFixture<Pagelogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagelogin],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagelogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

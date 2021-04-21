import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2Component } from './baitap2.component';

describe('Baitap2Component', () => {
  let component: Baitap2Component;
  let fixture: ComponentFixture<Baitap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Baitap2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

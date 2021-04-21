import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeatSelectedComponent } from './list-seat-selected.component';

describe('ListSeatSelectedComponent', () => {
  let component: ListSeatSelectedComponent;
  let fixture: ComponentFixture<ListSeatSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeatSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSeatSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

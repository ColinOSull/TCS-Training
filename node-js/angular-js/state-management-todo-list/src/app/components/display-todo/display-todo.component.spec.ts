import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTodoComponent } from './display-todo.component';

describe('DisplayTodoComponent', () => {
  let component: DisplayTodoComponent;
  let fixture: ComponentFixture<DisplayTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

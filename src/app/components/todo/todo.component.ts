import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { TodoService } from '../../services/todo.service';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  imports: [CommonModule, MaterialModule, CountdownComponent],
})
export class TodoComponent implements OnInit {
  @Input() set todo(todo: ITodo) {
    console.log(todo);
    this._todo = todo;
  }

  get todo() {
    return this._todo;
  }
  private _todo!: ITodo;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public onCompelteTodo(todo: ITodo): void {
    this._todoService.onTodoAction(todo.id, 1);
  }

  public onArchiveTodo(): void {
    this._todoService.onTodoAction(this.todo.id, 2);
  }
}

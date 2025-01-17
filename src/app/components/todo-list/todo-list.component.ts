import { Component, OnInit, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  @Input() todos: Array<ITodo> = [];

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {}

  public onTodoClick(todo: ITodo, index: number): void {
    this._todoService.setSelectedTodo(todo);
    this.todos.forEach((todo) => {
      if (todo.selected) {
        todo.selected = false;
      }
    });
    this.todos[index].selected = true;
  }
}

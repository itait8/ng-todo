import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class TodoListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public todos: Array<ITodo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getTodos().subscribe((data) => {
        this.todos = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

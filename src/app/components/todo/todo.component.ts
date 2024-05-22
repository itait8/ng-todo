import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit, OnDestroy {
  public todo: ITodo = {
    id: 0,
    Title: '',
    description: '',
    isArchived: false,
    isCompleted: false,
    endDate: new Date(),
    selected: true,
  };

  private subscription: Subscription = new Subscription();

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription.add(
      this._todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCompelteTodo(todo: ITodo): void {
    todo.isCompleted = !todo.isCompleted;
  }

  public onArchiveTodo(): void {
    this.todo.isArchived = true;
    this._todoService.getNextUnarchived();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
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

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public onCompelteTodo(todo: ITodo): void {
    todo.isCompleted = !todo.isCompleted;
  }

  public onArchiveTodo(): void {
    this._todo.isArchived = true;
  }
}

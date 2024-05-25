import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: ITodo[] = [];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._todos
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._todos.length ? this._todos[0] : null
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo): void {
    this._singleTodoSubject.next(todo);
  }

  public getNextUnarchived(): void {
    for (var i = 0; i < this._todos.length; i++) {
      if (this._todos[i].isArchived == false) {
        this.setSelectedTodo(this._todos[i]);
        return;
      }
    }
  }

  public addNewTodo(newTodo: ITodo): void {
    console.log(newTodo);
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    existingTodos.push(newTodo);
    this._todoSubject.next(existingTodos);
  }
}

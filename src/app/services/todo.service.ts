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
    if (!this._todoSubject.value.length) {
      if (typeof window !== 'undefined') {
        const todosString = localStorage.getItem('todos');

        if (todosString) {
          const existingTodos: Array<ITodo> = JSON.parse(todosString);
          existingTodos[0].selected = true;
          this._todoSubject.next(existingTodos);
          this._singleTodoSubject.next(existingTodos[0]);
        }
      }
    }
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
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }

  public onTodoAction(todoId: String, actionCode: number): void {
    const existingTodos: Array<ITodo> = this._todoSubject.value;
    const todoIndex = existingTodos.findIndex(
      (singleTodo) => singleTodo.id == todoId
    );
    switch (actionCode) {
      case 1:
        existingTodos[todoIndex].isCompleted =
          !existingTodos[todoIndex].isCompleted;
        break;
      case 2:
        existingTodos[todoIndex].isArchived =
          !existingTodos[todoIndex].isArchived;
        break;
      default:
        break;
    }

    this._todoSubject.next(existingTodos);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoComponent } from '../todo/todo.component';
import { MaterialModule } from '../../material/material.module';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss',
  imports: [TodoListComponent, TodoComponent, MaterialModule],
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  public todo: ITodo;
  public todos!: ITodo[];

  constructor(public dialog: MatDialog, private _todoService: TodoService) {}

  ngOnInit() {
    this.subscription.add(
      this._todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data;
      })
    );

    this.subscription.add(
      this._todoService.getTodos().subscribe((data) => {
        this.todos = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '260px',
      height: '325px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

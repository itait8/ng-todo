import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';

import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MaterialModule,
    TodoListComponent,
    HeaderComponent,
    CommonModule,
    TodoComponent,
  ],
})
export class AppComponent {
  title = 'ng-todo';

  constructor(public dialog: MatDialog) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width: '250px',
      height: '70px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

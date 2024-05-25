import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { ITodo } from '../../models/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [FormsModule, MaterialModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss',
})
export class NewTodoComponent {
  constructor(public dialog: MatDialog, private todoService: TodoService) {}

  @ViewChild('f') form: NgForm;

  public onNewTodoSubmit(): void {
    const formValues = this.form.form.value;

    const newTodo: ITodo = {
      id: uuidv4(),
      Title: formValues.title,
      description: formValues.description,
      endDate: formValues.date,
      isCompleted: false,
      isArchived: false,
      selected: false,
    };

    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();

    console.log('on Sumbit');
    console.log(this.form);
  }
}

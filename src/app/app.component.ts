import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { HeaderComponent } from "./components/header/header.component";




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MaterialModule, TodoListComponent, HeaderComponent]
})
export class AppComponent {
  title = 'ng-todo';
}

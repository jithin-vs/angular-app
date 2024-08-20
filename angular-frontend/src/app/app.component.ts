import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './tasklist/tasklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-frontend';
}

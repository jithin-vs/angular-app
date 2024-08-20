import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
  
export class TaskListComponent {
  
  taskArray = [{taskName:"sleep",isCompleted:false}];

  constructor() { }
  
  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    console.log(form.controls);

    this.taskArray.push({
      taskName:form.controls['task'].value,
      isCompleted:false,
    })
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
}

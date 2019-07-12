import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TaskManager} from '../TaskManager';
import {TaskServiceService} from '../task-service.service';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm = new FormGroup({
    task: new FormControl(''),
    priority: new FormControl(''),
    parenttask: new FormControl(''),
    startdate: new FormControl(''),
    enddate: new FormControl(''),
   
  });
  constructor(public taskService : TaskServiceService) { }

  ngOnInit() {
    console.log(this.taskForm.value);
    


    console.log("called service");
  }

  public  addUpdateTask(){
    console.log(this.taskForm.value);
    alert("caling task service"+this.taskForm.value);
    this.taskService.addTask(this.taskForm.value).subscribe(data=>{
      console.log(data);
      
    });
    //return this.http.post<TaskManager>('http://localhost:8082/task/addTask',this.taskForm);
  }

}

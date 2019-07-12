import {HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TaskManager} from '../task/TaskManager';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(public http: HttpClient) { }


  addTask(tm:TaskManager ){

    alert("caling task service");
    return this.http.post<TaskManager>('http://localhost:8082/taskManager/addTask',tm);
  }
}

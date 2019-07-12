import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from 'src/app/employee/employee-list.component';
import { EmpDetailComponent } from './employee/emp-detail/emp-detail.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { EditTaskComponent } from './task/edit-task/edit-task.component';
import { EndTaskComponent } from './task/end-task/end-task.component';
import {TaskServiceService} from './task/task-service.service';
import {TaskManager} from './task/TaskManager';
import { TestCompComponent } from './test/test-comp/test-comp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmpDetailComponent,
    WelcomeComponentComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    EndTaskComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'addTask', component:AddTaskComponent},
      {path: 'viewTask', component:ViewTaskComponent},
      {path: 'editTask', component:EditTaskComponent},
      {path: 'endTask', component:EndTaskComponent},
      {path: 'employee', component:EmployeeListComponent},
      {path: 'employee/:id', component:EmpDetailComponent},
      {path: 'welcome', component:WelcomeComponentComponent},
      {path: 'addEmployee', component:EmployeeComponent},
      {path: '',redirectTo:'welcome',pathMatch:'full'},
      {path: '**',redirectTo:'welcome',pathMatch:'full'}
        
    ], { useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

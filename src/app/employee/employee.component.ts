import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {Emp} from './Emp';
import {EmpService} from './emp.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  pageTitle="Add new Employee";
  //empList = 
  empForm = new FormGroup({
    empid: new FormControl(''),
    empname: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    salary: new FormControl(''),
    rating: new FormControl('')
  });
 
  constructor(public empService: EmpService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.empForm.value);
    let output = this.empService.getEmpDetail().subscribe(data => {
      console.log(data);
    })
    console.log(output);

    console.log("called service");
  }

  updateEmployee(){
    console.log(this.empForm.value);
  }

}

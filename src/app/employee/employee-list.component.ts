import { Component,OnInit } from '@angular/core';
import { Emp } from 'src/app/employee/Emp';

@Component({
    selector:'emp-list',
    templateUrl:'./employee-list.component.html',
    styleUrls:['./employee-list.component.css']

})
export class EmployeeListComponent implements OnInit { 
    empListTitle: string="Employee List";
    showImage : boolean = true;
    empFilter: string='';
   // filteredEmployees:Emp[];
    ngOnInit():void{
        console.log("In onInit");
    }
    employees: any[]=[

        { 
            "imgUrl":"./emp1.jpg",
            "title":"Manager",
            "empId":"18ca01",
            "empName":"Emp1",
            "address":"addrdetails",
            "email":"emp1@gmail.com",
            "salary":"10.00L",
            "rating":"A1"
            

        },
        {
            "imgUrl":"./emp2.jpg",
            "title":"Employee won awards",
            "empId":"18ca02",
            "empName":"Emp2",
            "address":"addrdetails",
            "email":"emp2@gmail.com",
            "salary":"10.00L",
            "rating":"A1"
            
        }
    ];

    toggleImage():void{
        //alert("test" + this.showImage);
        this.showImage = !this.showImage;
        //alert("test" + this.showImage);
    }
}
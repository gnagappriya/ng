import {HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class EmpService{
constructor(private http: HttpClient) { }


private empUrl = "http://localhost:8085/SpringMVC/rest/kfc/brands/test";
getEmpDetail(){
    return this.http.get<any>(this.empUrl);
}
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  readonly apiUrl = 'https://localhost:7209/api/'

  constructor(private http: HttpClient) {}

  //Department Section
  getDepartmentList():Observable<any[]> {
    return this.http.get<any[]> (this.apiUrl+'Department/GetDepartment');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Department/AddDepartment', dept, httpOptions);  
  }

  updateDepartment(deptId: string, dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Department/UpdateDepartment?id='+deptId, dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl+'Department/DeleteDepartment?id=' + deptId, httpOptions);
  }

  //Student Section 
  getStudentList(): Observable<any[]> {
    return this.http.get<any[]> (this.apiUrl+'Student/GetStudent');
  } 

  addStudent(student: any): Observable<any> {
    console.log(student);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl+'Student/AddStudent', student, httpOptions);  
  }

  updateStudent(studentId: number, student: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>('https://localhost:7209/api/Student/UpdateStudent?id='+studentId, student, httpOptions);
  }

  deleteStudent(studentId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'Student/DeleteStudent?id='+studentId, httpOptions);
  }

  login(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    localStorage.setItem('userDetails', user);
    return this.http.post<any>(this.apiUrl + 'User/Login', user, httpOptions);
  }
  register(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<any>(this.apiUrl + 'User', user, httpOptions);
  }

}

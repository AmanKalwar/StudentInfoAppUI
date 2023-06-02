import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
  
@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service: ApiService) { }
  @Input() std: any;
  StudentId:number = 0;
  StudentName:string = "";
  Course:string = "";
  Specialization:string = "";
  Percentage:number = 0;
  DepartmentId:number = 0;

  StudentList: any = [];

  ngOnInit(): void {   
  } 

  addStudent() {   
    const val = {
      studentID: this.StudentId,
      studentName: this.StudentName,
      course: this.Course,
      specialization: this.Specialization,
      percentage: this.Percentage,
      departmentID: this.DepartmentId     
    };

    this.service.addStudent(val).subscribe(res => {
      alert("Student Added Successfully");
    });
  }

  updateStudent() {
    var studentId = JSON.parse(localStorage.getItem('id')!);
    const val = {
      studentID: this.StudentId,
      studentName: this.StudentName,
      course: this.Course,
      specialization: this.Specialization,
      percentage: this.Percentage,
      departmentID: this.DepartmentId     
    };

    this.service.updateStudent(studentId, val).subscribe(res => {
      alert("Student Updated Successfully");
    });
  }
  
}

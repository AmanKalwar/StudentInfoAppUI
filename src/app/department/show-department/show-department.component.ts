import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor(private service: ApiService) { }

  DepartmentList: any = [];
  ModalTitle = "";
  ActivateAddEditDepartComp: boolean = false;
  depart: any;

  ngOnInit(): void { 
    this.deptList();  
  }

  deptList() {
    this.service.getDepartmentList().subscribe(data => {
      this.DepartmentList = data;  
      console.log(this.DepartmentList);   
    });
  }

  addClick() {
    this.depart = {
      DepartmentId: "0",
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepartComp = true;        
  }

  editClick(item: any) {
    this.depart = item;
    localStorage.setItem('id', item.departmentID);   
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepartComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteDepartment(item.departmentID).subscribe(data => {
        alert("Deleted successfully");
        this.deptList();
      })
    }
  }
  
  closeClick() {
    this.ActivateAddEditDepartComp = false;
    this.deptList();
  }
 
}

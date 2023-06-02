import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'login'},
  { path: 'department', component: DepartmentComponent },
  { path: 'student', component: StudentComponent }, 
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent}, 
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

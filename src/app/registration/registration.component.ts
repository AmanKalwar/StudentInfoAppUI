import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(
    private http: HttpClient,
    public service: ApiService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email_Id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      jwtToken: new FormControl(''),
    });
  }
  register() {
    this.service.register(this.registerForm.value).subscribe(
      (res) => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration Failed. Please check your email and password.');
        console.error(error);
      }
    );
  }
  goToRegister() {
    this.router.navigate(['/login']);
  }
}

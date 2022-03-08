import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  innerWidth: number = 0;
  loading: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'remember': new FormControl(true, Validators.required),
    });
    this.loading = false;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  get isMobile(): boolean {
    return this.innerWidth < 960;
  }

}

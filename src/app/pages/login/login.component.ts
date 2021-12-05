import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin?: FormGroup;
  errorLogin: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  login() {
    let data = this.formLogin?.value;
    this.authService.checkLogin(data).subscribe(res => {
      if (res.status == 'success') {
        localStorage.setItem('userLogin', JSON.stringify(data));
        this.router.navigate(['admin/users']);
      } else {
        this.errorLogin = 'Mật khẩu hoặc tài khoản không chính xác!'
      }

    })
  }

  get password() {
    // @ts-ignore
    return this.formLogin?.get('password')
  }
  get email() {

    return this.formLogin?.get('email')
  }
}

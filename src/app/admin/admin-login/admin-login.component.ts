import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminForm: FormGroup
  authStatus: boolean;
  showSpinner: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;

    if (!this.authStatus) {
      this.initForm();
    } else {

    }
  }

  initForm() {
    this.adminForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    this.showSpinner = true;
    const formValue = this.adminForm.value;

    this.authService.signIn(formValue['login'], formValue['password']).then(
      () => {
        this.authStatus = this.authService.isAuth;
        if (this.authStatus) {
          this.showSpinner = false;
          this.router.navigate(['admin-home']);
        }
      }
    )
  }
}

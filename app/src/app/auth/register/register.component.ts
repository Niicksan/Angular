import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { sameValueGroupValidator } from 'src/app/shared/validators/same-value-group-validator';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  appEmailDomains = ['bg', 'com'];

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(this.appEmailDomains)]],
    ext: [''],
    tel: [''],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private authService: AuthService) { }

  registerHandler() {
    console.log(this.form.value);

    if (this.form.invalid) {
      return;
    }

    this.authService.user = {
      username: 'John'
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }

}

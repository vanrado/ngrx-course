import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {login} from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store) {

    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {
    const form = this.form.value;
    if (this.form.valid) {
      this.auth.login(form.email, form.password)
        .pipe(tap((user) => {
          this.store.dispatch(login({user}));
          this.router.navigateByUrl('courses');
        }))
        .subscribe(noop, () => alert('login not successfull'));
    }
  }

}


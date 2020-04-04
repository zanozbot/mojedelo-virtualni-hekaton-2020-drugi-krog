import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import LocalStorageUtil from 'src/app/utils/local-storage.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hidePassword = true;

  public loginFormGroup: FormGroup;

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public get controls(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  public login() {
    if (this.loginFormGroup.valid) {
      LocalStorageUtil.setIsAdmin();
      this.router.navigate(['/admin']);
    } else {
      this.snackbar.open('Izpolniti morate vsa zahtevana polja.', null, { duration: 5000, panelClass: 'has-border-left-accent' });
    }
  }

}

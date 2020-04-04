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
    // Inicialization of the login form group
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /**
   * A helper getter which is used in the HTML template
   */
  public get controls(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  /**
   * Checks if all field are valid, if so it registers the 'jeAdmin' key in to the
   * localStorage and redirects the user to admin page
   * otherwise, a snackbar is shown to user
   */
  public login() {
    if (this.loginFormGroup.valid) {
      LocalStorageUtil.setIsAdmin();
      this.router.navigate(['/admin']);
    } else {
      this.snackbar.open('Izpolniti morate vsa zahtevana polja.', null, { duration: 5000, panelClass: 'has-border-left-accent' });
    }
  }

}

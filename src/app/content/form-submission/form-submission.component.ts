import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import LocalStorageUtil from 'src/app/utils/local-storage.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-submission',
  templateUrl: './form-submission.component.html',
  styleUrls: ['./form-submission.component.scss']
})
export class FormSubmissionComponent implements OnInit {

  public submissionFormGroup: FormGroup;

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.submissionFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  public get controls(): { [key: string]: AbstractControl } {
    return this.submissionFormGroup.controls;
  }

  public publishSubmission() {
    if (this.submissionFormGroup.valid) {
      LocalStorageUtil.insertSubmission({
        firstName: this.submissionFormGroup.get('firstName').value,
        lastName: this.submissionFormGroup.get('lastName').value,
        address: this.submissionFormGroup.get('address').value,
        description: this.submissionFormGroup.get('description').value,
        id: Date.now().toString(),
        rating: -1
      });

      this.router.navigate(['/vloga-uspesno-oddana']);
    } else {
      this.snackbar.open('Izpolniti morate vsa zahtevana polja.', null, { duration: 5000, panelClass: 'has-border-left-orange' });
    }
  }

}

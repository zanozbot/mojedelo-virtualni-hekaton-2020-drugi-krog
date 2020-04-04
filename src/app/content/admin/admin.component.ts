import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Submission } from 'src/app/models/submission.model';
import { MatPaginator } from '@angular/material/paginator';
import LocalStorageUtil from 'src/app/utils/local-storage.util';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit {

  public dataSource: Submission[] = [];

  public columnsToDisplay = ['firstName', 'lastName', 'address', 'rating'];

  public expandedSubmission: Submission | null;

  constructor(private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = LocalStorageUtil.getSubmissions();
  }

  public onRatingUpdated(rating: number, id: string) {
    LocalStorageUtil.updateSubmissionRatingById(id, rating);
  }

  public get sessionTime(): string {
    const session = LocalStorageUtil.getSession();

    if (!session.valid) {
      this.snackbar.open('Trenutna seja vam je potekla. Prosimo, da se ponovno prijavite.', null, { duration: 5000, panelClass: 'has-border-left-accent' });
      this.router.navigate(['/prijava']);
    }

    return session.time;
  }

}

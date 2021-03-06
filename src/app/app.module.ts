import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormSubmissionComponent } from './content/form-submission/form-submission.component';
import { HomeComponent } from './content/home/home.component';
import { FormSubmissionSuccessComponent } from './content/form-submission-success/form-submission-success.component';
import { LoginComponent } from './content/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminComponent } from './content/admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorProvider } from './providers/paginator.provider';
import { RatingsComponent } from './content/ratings/ratings.component';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FormSubmissionComponent,
    HomeComponent,
    FormSubmissionSuccessComponent,
    LoginComponent,
    AdminComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: PaginatorProvider() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

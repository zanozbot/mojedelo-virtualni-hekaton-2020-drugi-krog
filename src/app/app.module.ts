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

@NgModule({
  declarations: [
    AppComponent,
    FormSubmissionComponent,
    HomeComponent,
    FormSubmissionSuccessComponent,
    LoginComponent,
    AdminComponent
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
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: PaginatorProvider() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

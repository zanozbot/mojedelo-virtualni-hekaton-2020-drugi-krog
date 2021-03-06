import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSubmissionComponent } from './content/form-submission/form-submission.component';
import { HomeComponent } from './content/home/home.component';
import { FormSubmissionSuccessComponent } from './content/form-submission-success/form-submission-success.component';
import { LoginComponent } from './content/login/login.component';
import { AdminComponent } from './content/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FormSubmissionComponent,
        data: { title: 'Obrazec za oddajo vloge - MojeDelo' }
      },
      {
        path: 'vloga-uspesno-oddana',
        component: FormSubmissionSuccessComponent,
        data: { title: 'Vloga uspešno oddana - MojeDelo' }
      },
      {
        path: 'prijava',
        component: LoginComponent,
        data: { title: 'Prijava za administratorje - MojeDelo' }
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { title: 'Pregled oddanih vlog - MojeDelo' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

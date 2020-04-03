import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSubmissionComponent } from './content/form-submission/form-submission.component';
import { HomeComponent } from './content/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FormSubmissionComponent,
        data: { title: 'Obrazec za oddajo vloge - MojeDelo' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

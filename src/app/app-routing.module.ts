import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGuardService } from './services/user-guard.service';
import { AdminGuardService } from './services/admin-guard.service';



import { Template1Component } from './templates/template1/template1.component';
import { Template2Component } from './templates/template2/template2.component';
import { Template3Component } from './templates/template3/template3.component';
import { Template4Component } from './templates/template4/template4.component';
import { Template5Component } from './templates/template5/template5.component';
import { Template6Component } from './templates/template6/template6.component';
import { Template1CreateComponent } from './templates/template1/template1-create/template1-create.component';
import { Template2CreateComponent } from './templates/template2/template2-create/template2-create.component';
import { Template3CreateComponent } from './templates/template3/template3-create/template3-create.component';
import { Template4CreateComponent } from './templates/template4/template4-create/template4-create.component';
import { Template5CreateComponent } from './templates/template5/template5-create/template5-create.component';
import { Template6CreateComponent } from './templates/template6/template6-create/template6-create.component';
import { HomeComponent } from './admin/home/home.component';
import { AddComponent } from './admin/add/add.component';
import { ApplicantListComponent } from './admin/applicant-list/applicant-list.component';
import { ShortlistComponent } from './admin/shortlist/shortlist.component';
import { ViewPostComponent } from './admin/view-post/view-post.component';
import { ExpiredPostComponent } from './admin/expired-post/expired-post.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CareerComponent } from './user/career/career.component';
import { QuizComponent } from './user/quiz/quiz.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { JobDescriptionComponent } from './user/job-description/job-description.component';
import { MyJobComponent } from './user/my-job/my-job.component';

 

const routes: Routes = [
  { path: 'create-resume', component: CreateResumeComponent },
  { path: 'show-list', component: UserListComponent },

  { path: 'template1-view/:id', component: Template1Component },
  { path: 'template1-create', component: Template1CreateComponent },
  { path: 'template2-view/:id', component: Template2Component },
  { path: 'template2-create', component: Template2CreateComponent },
  { path: 'template3-view/:id', component: Template3Component },
  { path: 'template3-create', component: Template3CreateComponent },
  { path: 'template4-view/:id', component: Template4Component },
  { path: 'template4-create', component: Template4CreateComponent },
  { path: 'template5-view/:id', component: Template5Component },
  { path: 'template5-create', component: Template5CreateComponent },
  { path: 'template6-view/:id', component: Template6Component },
  { path: 'template6-create', component: Template6CreateComponent },
  { path: 'admin-home', component: HomeComponent, canActivate:[AdminGuardService] },
  { path: 'admin-add', component: AddComponent, canActivate:[AdminGuardService] },
  { path: 'admin-view', component: ViewPostComponent, canActivate:[AdminGuardService] },
  { path: 'expired-post', component:ExpiredPostComponent, canActivate:[AdminGuardService] },
  { path: 'admin-applicants/:id', component: ApplicantListComponent, canActivate:[AdminGuardService] },
  { path: 'admin-shortlist/:id', component: ShortlistComponent, canActivate:[AdminGuardService] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'career', component: CareerComponent },
  { path: 'quiz/:id', component: QuizComponent, canActivate:[UserGuardService] },
  { path: '', component: UserHomeComponent },
  { path: 'job-description/:id', component:JobDescriptionComponent },
  { path: 'my-job', component:MyJobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

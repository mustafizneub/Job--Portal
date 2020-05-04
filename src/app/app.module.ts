import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './services/auth.service';
import { AdminGuardService } from './services/admin-guard.service';
import { UserGuardService } from './services/user-guard.service';
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
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CareerComponent } from './user/career/career.component';
import { QuizComponent } from './user/quiz/quiz.component';
import { ViewPostComponent } from './admin/view-post/view-post.component';
import { from } from 'rxjs';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { JobDescriptionComponent } from './user/job-description/job-description.component';
import { ExpiredPostComponent } from './admin/expired-post/expired-post.component';
import { MyJobComponent } from './user/my-job/my-job.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateResumeComponent,
    UserListComponent,
    NavComponent,
    

    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    Template6Component,
    Template1CreateComponent,
    Template2CreateComponent,
    Template3CreateComponent,
    Template4CreateComponent,
    Template5CreateComponent,
    Template6CreateComponent,
    HomeComponent,
    AddComponent,
    ApplicantListComponent,
    ShortlistComponent,
    SignInComponent,
    SignUpComponent,
    CareerComponent,
    QuizComponent,
    ViewPostComponent,
    UserHomeComponent,
    JobDescriptionComponent,
    ExpiredPostComponent,
    MyJobComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [AuthService, AdminGuardService, UserGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

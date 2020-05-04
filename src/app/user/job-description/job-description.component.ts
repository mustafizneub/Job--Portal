import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  information;
  x;
  data;
  login = true;
  constructor(private route:ActivatedRoute, 
    private afs:AngularFirestore,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(this.data==null){
       this.login=false;
    }
    this.route.params.subscribe((param) => {
      this.x = param.id;
      this.afs
        .collection('/jobs')
        .doc(param.id)
        .valueChanges()
        .subscribe((e) => {
          this.information = e;
        });
    });
  }
  signout(){
    this.authService.signOut();
  }

}

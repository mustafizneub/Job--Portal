import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.css']
})
export class MyJobComponent implements OnInit {

  information;
  jobId;
  jobInfo;
  login=true;

  constructor( private afs:AngularFirestore,
    private authService:AuthService) { 
    
  }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(data==null){
       this.login=false;
    }
    let id = localStorage.getItem('id');
    this.afs.collection('/profile').doc(id).valueChanges().subscribe(x=>{
      this.information = x;
      this.jobId = this.information.jobId;
      this.afs.collection('jobs').doc(this.jobId).valueChanges().subscribe(x=>{
        this.jobInfo = x;
      })

      })
    
  }
  signout(){
    this.authService.signOut();
  }

}

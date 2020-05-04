import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expired-post',
  templateUrl: './expired-post.component.html',
  styleUrls: ['./expired-post.component.css']
})
export class ExpiredPostComponent implements OnInit {

  information;
  filteredArray=[];
  isExpired: boolean =true;

  constructor(private authService: AuthService,
    private afs: AngularFirestore, private router: Router) { }

  ngOnInit(): void {

    this.afs.collection('/jobs')
      .snapshotChanges()
      .subscribe(x => {
        this.information = x.map(e => {
          return ({
            id: e.payload.doc.id,
            data: e.payload.doc.data()
          })
        })
        let today = new Date();
        let date = today.getFullYear() + '-'+('0'+ (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
        for(let i= 0; i<this.information.length; i++){
          if (this.information[i].data.job.deadLine < date){
          this.filteredArray.push(this.information[i]);
        }
        }
        
      })
  }

  signout() {
    this.authService.signOut();
  }

}

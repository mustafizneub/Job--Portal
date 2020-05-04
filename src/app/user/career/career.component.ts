import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  information;
  filteredArray=[];
  data;
  login=true;
  constructor( private authService:AuthService, private afs:AngularFirestore ) { }

  

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(this.data==null){
       this.login=false;
    }
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
        let date = today.getFullYear() + '-' + ('0'+(today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
        for (let i = 0; i < this.information.length; i++) {
          if (this.information[i].data.job.deadLine >= date) {
            this.filteredArray.push(this.information[i]);
          }
        }
    })
  
  }

  signout(){
    this.authService.signOut();
  }


}

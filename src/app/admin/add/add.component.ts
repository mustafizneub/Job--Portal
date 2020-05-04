import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  date;

  constructor( private afs:AngularFirestore, 
    private afd:AngularFireDatabase,
    private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onSubmit(form){
    let job = form.value.jobDetails;

    this.afs.collection('/jobs').add({
      job
    }).then(x => {
      this.afd.database.ref('/jobs').child(x.id).set({
        job
      })
      alert('Added Successfully.');
      window.location.reload();
      

    })
    

  }
  signout(){
    this.authService.signOut();
  }

}

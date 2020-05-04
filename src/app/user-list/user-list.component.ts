import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  information;
  click = true;
  constructor(private db: AngularFirestore, private router:Router) {
   }

  ngOnInit(): void {
    this.db.collection('/profile')
      .snapshotChanges()
      .subscribe(x => {
        this.information = x.map(e => {
          return ({
            id: e.payload.doc.id,
            data: e.payload.doc.data()
          })
        })
      })
  }
  onClick() {
    this.click = false;
  }
  view(){
    this.router.navigate(['/show-list']);
   }
   create(){
    this.router.navigate(['create-resume']);
   }


}

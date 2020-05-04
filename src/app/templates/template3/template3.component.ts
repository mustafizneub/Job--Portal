import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {

  information;
  x;
  constructor(private db: AngularFirestore, private route: ActivatedRoute, private router:Router) {

  }

  view(){
    this.router.navigate(['/admin-view']);
   }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
      })

    })
  }

}

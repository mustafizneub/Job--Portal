import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template7',
  templateUrl: './template7.component.html',
  styleUrls: ['./template7.component.css']
})
export class Template7Component implements OnInit {

  information;
  x;

  constructor(private route:ActivatedRoute, private db:AngularFirestore, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
      })

    })
  }
  Update(){
     this.router.navigate(['/temp7-update',this.x]);
  }

  view(){
    this.router.navigate(['/show-list']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template5',
  templateUrl: './template5.component.html',
  styleUrls: ['./template5.component.css']
})
export class Template5Component implements OnInit {

  information;
  x;

  constructor(private route:ActivatedRoute, private db:AngularFirestore, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
        console.log(this.information)
      })

    })
    
  }

  view(){
    this.router.navigate(['/admin-view']);
   }
  


}

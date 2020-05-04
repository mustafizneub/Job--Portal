import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

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

  view(){
    this.router.navigate(['/show-list']);
   }
  Update(){
    this.router.navigate(['/temp-update',this.x]);
   }
  

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.css']
})
export class ViewResumeComponent implements OnInit {

  information;
  x;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) {

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

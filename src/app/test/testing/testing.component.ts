import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor(private db: AngularFirestore) {

  }

  ngOnInit(): void {
  }

  array = [0];
  x = 1;

  add() {

    if (this.array.length < 4) {
      this.array.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove(i) {
    this.array.splice(i, 1);
    console.log(i, this.array.length)

  }

  onSubmit(form) {
    let info = form.value.x;
    this.db.collection('/profile').add({
      info
    })

  }
}

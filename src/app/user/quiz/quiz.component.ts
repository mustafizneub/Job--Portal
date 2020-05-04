import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  data;
  login = true;
  questions;

  constructor(private db: AngularFirestore,
    private afd: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {

    this.questions = this.db.collection('/quiz')
      .snapshotChanges()
      .subscribe(questions => {
        this.questions = questions.map(e => {
          return ({
            id: e.payload.doc.id,
            data: e.payload.doc.data()
          })
        });

      })
  }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (this.data == null) {
      this.login = false;
    }
  }

  onSubmit(form) {

    let answer = form.value.answers;
    let userId = localStorage.getItem('id')
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    this.route.params.subscribe(x => {
       let id = x.id;

      this.db.collection('/profile').doc(userId).set({
        jobId:id,
        isSelected: 0,
        answers: answer,
        dateTime: dateTime
      }).then(x => {
        this.afd.database.ref('/profile').child(userId).set({
          jobId:id,
          isSelected: 0,
          answers: answer,
          dateTime: dateTime
        })
        this.router.navigate(['/create-resume'])
      })
    })
  }
  signout() {
    this.authService.signOut();
  }

}

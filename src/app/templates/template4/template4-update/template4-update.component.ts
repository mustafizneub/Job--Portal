import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-template4-update',
  templateUrl: './template4-update.component.html',
  styleUrls: ['./template4-update.component.css']
})
export class Template4UpdateComponent implements OnInit {

  information;
  id;

  file;
  array = [0];
  array1 = [0];
  array2 = [0];
  array3 = [0];
  array4 = [0];
  array5 = [0];
  array6 = [0];
  x = 1;
  Downloadurl;
  constructor(private route: ActivatedRoute, private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
        this.Downloadurl = this.information.url;
      })

    })
  }

  add() {

    if (this.array.length < 5) {
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
  add1() {

    if (this.array1.length < 5) {
      this.array1.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove1(i) {
    this.array1.splice(i, 1);
    console.log(i, this.array1.length)

  }

  add2() {

    if (this.array2.length < 5) {
      this.array2.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove2(i) {
    this.array2.splice(i, 1);

  }

  add3() {

    if (this.array3.length < 5) {
      this.array3.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove3(i) {
    this.array3.splice(i, 1);

  }

  add4() {

    if (this.array4.length < 5) {
      this.array4.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove4(i) {
    this.array4.splice(i, 1);

  }

  add5() {

    if (this.array5.length < 5) {
      this.array5.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove5(i) {
    this.array5.splice(i, 1);

  }

  add6() {

    if (this.array6.length < 5) {
      this.array6.push(this.x);
    }
    else {
      alert('limit accrosed');
    }

  }
  remove6(i) {
    this.array6.splice(i, 1);

  }


  upload(event) {
    this.file = event.target.files[0];
  }

  onSubmit(form: any) {
    let basicInfo = form.value.basicinfo;
    let qualification = form.value.qualification;
    let skills = form.value.skills;
    let projects = form.value.projects;
    let participation = form.value.Participation;
    let onlineJudge = form.value.onlineJudge;
    let experience = form.value.experience;

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.Downloadurl = url;
            this.db.collection('profile').doc(this.id).set({
              basicInfo,
              url: url,
              cvNo: 4,
              qualification,
              skills,
              projects,
              participation,
              onlineJudge,
              experience

            })
          })
        })
      )
        .subscribe()

    }
    else {

      this.db.collection('profile').doc(this.id).set({
        basicInfo,
        url: this.Downloadurl,
        cvNo: 4,
        qualification,
        skills,
        projects,
        participation,
        onlineJudge,
        experience

      })
    }



    alert('Your Profile Updated successfully');

  }

}

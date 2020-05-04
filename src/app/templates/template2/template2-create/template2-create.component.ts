import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-template2-create',
  templateUrl: './template2-create.component.html',
  styleUrls: ['./template2-create.component.css']
})
export class Template2CreateComponent implements OnInit {

  file;
  array = [0];
  array1 = [0];
  array2 = [0];
  array3 = [0];
  array4 = [0];
  array5 = [0];
  array6 = [0];
  x = 1;


  constructor(private db: AngularFirestore,
    private afdb:AngularFireDatabase,
    private storage: AngularFireStorage, private router: Router) {


  }
  ngOnInit(): void {

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
    let language = form.value.Language;
    let software = form.value.software;
    let hobby = form.value.interest;
    let id = localStorage.getItem('id');
    let Downloadurl = '../../../../assets/images/user1.png';

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.db.collection('profile').doc(id).update({
              basicInfo,
              url: url,
              cvNo: 2,
              qualification,
              skills,
              projects,
              participation,
              onlineJudge,
              experience,
              language,
              software,
              hobby

            }).then(x => {
              this.afdb.database.ref('profile').child(id).update({
                basicInfo,
                url: url,
                cvNo: 2,
                qualification,
                skills,
                projects,
                participation,
                onlineJudge,
                experience,
                language,
                software,
                hobby
              })
            })
          })
        })
      )
        .subscribe()

    }
    else {

      this.db.collection('profile').doc(id).update({

        basicInfo,
        url: Downloadurl,
        cvNo: 2,
        qualification,
        skills,
        projects,
        participation,
        onlineJudge,
        experience,
        language,
        software,
        hobby

      }).then(x => {
        this.afdb.database.ref('profile').child(id).update({
          basicInfo,
          url: Downloadurl,
          cvNo: 2,
          qualification,
          skills,
          projects,
          participation,
          onlineJudge,
          experience,
          language,
          software,
          hobby
        })
      })
    }



    alert('Your Profile saved successfully');
    this.router.navigate[''];

  }


}

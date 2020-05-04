import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-template6-create',
  templateUrl: './template6-create.component.html',
  styleUrls: ['./template6-create.component.css']
})
export class Template6CreateComponent implements OnInit {

  array = [0];
  array1 = [0];
  array2 = [0];
  x = 1;
  file;
  downloadurl = "../../../../assets/images/user1.png";

  constructor(private db: AngularFirestore,
    private afd: AngularFireDatabase,
    private storage: AngularFireStorage,
    private router: Router) { }

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

  upload(event) {
    this.file = event.target.files[0];
  }

  onSubmit(form) {

    let basicInfo = form.value.basicinfo;
    let qualification = form.value.qualification;
    let experience = form.value.experience;
    let software = form.value.software;
    let id = localStorage.getItem('id');

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.db.collection('profile').doc(id).update({
              basicInfo,
              qualification,
              experience,
              software,
              url: url,
              cvNo: 6
            }).then(x => {
              this.afd.database.ref('profile').child(id).update({
                basicInfo,
                qualification,
                experience,
                software,
                url: url,
                cvNo: 6
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
        qualification,
        experience,
        software,
        url: this.downloadurl,
        cvNo: 6

      }).then(x => {
        this.afd.database.ref('profile').child(id).update({
          basicInfo,
          qualification,
          experience,
          software,
          url: this.downloadurl,
          cvNo: 6
        })
      })
    }
    alert('your profile successfully added.');
    this.router.navigate([''])
  }


}

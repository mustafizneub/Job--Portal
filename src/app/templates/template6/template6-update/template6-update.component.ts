import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template6-update',
  templateUrl: './template6-update.component.html',
  styleUrls: ['./template6-update.component.css']
})
export class Template6UpdateComponent implements OnInit {

  file;
  downloadurl;
  x;
  information;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {

      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
        this.downloadurl = this.information.url;
      })
    })
  }

  upload(event) {
    this.file = event.target.files[0];
  }

  onSubmit(form) {

    let basicInfo = form.value.basicinfo;
    let qualification = form.value.qualification;
    let experience = form.value.experience;
    let software = form.value.software;

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.db.collection('profile').doc(this.x).set({

              basicInfo,
              url: url,
              cvNo: 6,
              qualification,
              experience,
              software

            })

          })
        })
      )
        .subscribe()

    }
    else {

      this.db.collection('profile').doc(this.x).set({

        basicInfo,
        url: this.downloadurl,
        cvNo: 6,
        qualification,
        experience,
        software

      })
    }
    alert('your profile successfully added.');
  }



}

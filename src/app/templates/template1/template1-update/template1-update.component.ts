import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-template1-update',
  templateUrl: './template1-update.component.html',
  styleUrls: ['./template1-update.component.css']
})
export class Template1UpdateComponent implements OnInit {

  information;
  id;
  
  file;
  array = [0,0,0,0,0];
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
    let software = form.value.software;
    let hobby = form.value.interest;

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
              url:url,
              cvNo:1,
              qualification,
              skills,
              projects,
              participation,
              onlineJudge,
              experience,
              software,
              hobby

            })
          })
        })
      )
        .subscribe()

    }
    else {

      this.db.collection('profile').doc(this.id).set({
        basicInfo,
              url:this.Downloadurl,
              cvNo:1,
              qualification,
              skills,
              projects,
              participation,
              onlineJudge,
              experience,
              software,
              hobby

      })
    }



    alert('Your Profile Updated successfully');

  }



}

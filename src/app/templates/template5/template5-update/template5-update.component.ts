import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-template5-update',
  templateUrl: './template5-update.component.html',
  styleUrls: ['./template5-update.component.css']
})
export class Template5UpdateComponent implements OnInit {

  information;
  x;
  basicInfo;
  qualification;
  experience;
  software;
  social;

  constructor(private db:AngularFirestore, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(param => {
      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
      })

    })
  }

  onSubmit(form){

    let basicInfo = form.value.basicinfo;
    let qualification = form.value.qualification;
    let experience = form.value.experience;
    let social = form.value.social;
    let software = form.value.software;
    
    this.db.collection('profile').doc(this.x).set({
      
      basicInfo,
      cvNo:5,
      qualification,
      experience,
      social,
      software

    })
    alert('your profile successfully updated.')
  }



}

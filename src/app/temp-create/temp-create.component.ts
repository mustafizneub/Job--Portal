import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-temp-create',
  templateUrl: './temp-create.component.html',
  styleUrls: ['./temp-create.component.css']
})
export class TempCreateComponent implements OnInit {

  basicInfo;
  qualification;
  experience;
  software;
  social;

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
  }
  onSubmit(form){

    this.basicInfo = form.value.basicinfo;
    this.qualification = form.value.qualification;
    this.experience = form.value.experience;
    this.social = form.value.social;
    this.software = form.value.software;
    
    this.db.collection('profile').add({
      basicInfo: {
        name: this.basicInfo.name,
        email: this.basicInfo.email,
        phone: this.basicInfo.phonenumber,
        address: this.basicInfo.presentaddress,
        designation: this.basicInfo.designation,
        cvNo: 6,
        objective:this.basicInfo.objective,
        linkedin:this.basicInfo.linkedin

      },
      qualification: {
        qualification1: {
          name: this.qualification.certificationname0,
          institute: this.qualification.institute0,
          session: this.qualification.session0,
        },
        qualification2: {
          name: this.qualification.certificationname1,
          institute: this.qualification.institute1,
          session: this.qualification.session1,
        },
        qualification3: {
          name: this.qualification.certificationname2,
          institute: this.qualification.institute2,
          session: this.qualification.session2
        }

      },
      experience: {
        experience1: {
          company: this.experience.companyName0,
          designation: this.experience.designation0,
          from: this.experience.from0,
          to: this.experience.to0,
          description:this.experience.description0
        },
        experience2: {
          company: this.experience.companyName1,
          designation: this.experience.designation1,
          from: this.experience.from1,
          to: this.experience.to1,
          description:this.experience.description1
        },
        experience3: {
          company: this.experience.companyName2,
          designation: this.experience.designation2,
          from: this.experience.from2,
          to: this.experience.to2,
          description:this.experience.description2
        }
      },
      software: {
        soft1: this.software.soft0,
        soft2: this.software.soft1,
        soft3: this.software.soft2,
        soft4: this.software.soft3,
        soft5: this.software.soft4,
        soft6: this.software.soft5

      },
      social:{
        facebook:this.social.facebook,
        twitter:this.social.twitter,
        dribble:this.social.dribble

      },

    })
    alert('your profile successfully added.')
  }

}

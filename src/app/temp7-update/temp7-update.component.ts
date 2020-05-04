import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temp7-update',
  templateUrl: './temp7-update.component.html',
  styleUrls: ['./temp7-update.component.css']
})
export class Temp7UpdateComponent implements OnInit {

  basicInfo;
  qualification;
  experience;
  software;
  file;
  downloadurl;
  x;
  information;

  constructor(private db:AngularFirestore, private storage:AngularFireStorage, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{

      this.x=param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
        this.downloadurl = this.information.basicInfo.url;
        console.log(this.information)
      })
    })
  }

  upload(event) {
    this.file = event.target.files[0];
  }

  onSubmit(form){

    this.basicInfo = form.value.basicinfo;
    this.qualification = form.value.qualification;
    this.experience = form.value.experience;
    this.software = form.value.software;

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.db.collection('profile').doc(this.x).set({
              basicInfo: {
                name: this.basicInfo.name,
                email: this.basicInfo.email,
                phone: this.basicInfo.phonenumber,
                address: this.basicInfo.presentaddress,
                designation: this.basicInfo.designation,
                cvNo: 7,
                url:url,
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
        
              }
        
            })
            
          })
        })
      )
        .subscribe()
    
      }
    else{

      this.db.collection('profile').doc(this.x).set({
        basicInfo: {
          name: this.basicInfo.name,
          email: this.basicInfo.email,
          phone: this.basicInfo.phonenumber,
          address: this.basicInfo.presentaddress,
          designation: this.basicInfo.designation,
          cvNo: 7,
          url:this.downloadurl,
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
  
        }
  
      })
    }
    alert('your profile successfully added.');
  }

}

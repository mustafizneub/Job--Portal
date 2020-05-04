import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  information;
  x;
  basicInfo;
  qualification;
  skills;
  projects;
  participation;
  onlineJudge;
  experience;
  language;
  software;
  hobby;
  file;
  cvNo: number;
  Downloadurl;
  constructor(private route: ActivatedRoute, private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.x = param.id;
      this.db.collection('/profile').doc(param.id).valueChanges().subscribe(e => {
        this.information = e;
        this.Downloadurl = this.information.basicInfo.url;
      })

    })
  }


  upload(event) {
    this.file = event.target.files[0];
  }

  onSubmit(form: any) {
    this.basicInfo = form.value.basicinfo;
    this.qualification = form.value.qualification;
    this.skills = form.value.skills;
    this.projects = form.value.projects;
    this.participation = form.value.Participation;
    this.onlineJudge = form.value.onlineJudge;
    this.experience = form.value.experience;
    this.language = form.value.Language;
    this.software = form.value.software;
    this.hobby = form.value.interest;

    if (this.file) {
      const filePath = `upload/profile/${Date.now()}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.Downloadurl = url;
            this.db.collection('profile').doc(this.x).set({
              basicInfo: {
                name: this.basicInfo.name,
                email: this.basicInfo.email,
                phone: this.basicInfo.phonenumber,
                address: this.basicInfo.presentaddress,
                designation: this.basicInfo.designation,
                cvNo: this.information.basicInfo.cvNo,
                url: url,
                objective: this.basicInfo.objective,
                linkedin: this.basicInfo.linkedin

              },
              qualification: {
                qualification1: {
                  name: this.qualification.certificationname0,
                  institute: this.qualification.institute0,
                  cgpa: this.qualification.cgpa0,
                  session: this.qualification.session0,
                  description: this.qualification.description0
                },
                qualification2: {
                  name: this.qualification.certificationname1,
                  institute: this.qualification.institute1,
                  cgpa: this.qualification.cgpa1,
                  session: this.qualification.session1,
                  description: this.qualification.description1
                },
                qualification3: {
                  name: this.qualification.certificationname2,
                  institute: this.qualification.institute2,
                  cgpa: this.qualification.cgpa2,
                  session: this.qualification.session2,
                  description: this.qualification.description2
                }

              },
              skills: {
                programmingLanguage: this.skills.programming,
                framework: this.skills.framework,
                operating: this.skills.system,
                other: this.skills.other
              },
              projects: {
                project1: {
                  topic: this.projects.topic0,
                  description: this.projects.description0,
                  year: this.projects.year0
                },
                project2: {
                  topic: this.projects.topic1,
                  description: this.projects.description1,
                  year: this.projects.year1
                },
                project3: {
                  topic: this.projects.topic2,
                  description: this.projects.description2,
                  year: this.projects.year2
                }
              },
              participation: {
                event1: {
                  event: this.participation.event0,
                  achievement: this.participation.achievement0,
                  year: this.participation.time0
                },
                event2: {
                  event: this.participation.event1,
                  achievement: this.participation.achievement1,
                  year: this.participation.time1
                },
                event3: {
                  event: this.participation.event2,
                  achievement: this.participation.achievement2,
                  year: this.participation.time2
                }
              },
              onlineJudge: {
                judge1: {
                  name: this.onlineJudge.judgeName0,
                  achievement: this.onlineJudge.judgeAchievement0,
                  id: this.onlineJudge.id0
                },
                judge2: {
                  name: this.onlineJudge.judgeName1,
                  achievement: this.onlineJudge.judgeAchievement1,
                  id: this.onlineJudge.id1
                },
                judge3: {
                  name: this.onlineJudge.judgeName2,
                  achievement: this.onlineJudge.judgeAchievement2,
                  id: this.onlineJudge.id2
                }
              },
              experience: {
                experience1: {
                  company: this.experience.companyName0,
                  designation: this.experience.designation0,
                  from: this.experience.from0,
                  to: this.experience.to0,
                  description: this.experience.description0
                },
                experience2: {
                  company: this.experience.companyName1,
                  designation: this.experience.designation1,
                  from: this.experience.from1,
                  to: this.experience.to1,
                  description: this.experience.description1
                },
                experience3: {
                  company: this.experience.companyName2,
                  designation: this.experience.designation2,
                  from: this.experience.from2,
                  to: this.experience.to2,
                  description: this.experience.description2
                }
              },
              software: {
                soft1: this.software.soft0,
                val1: this.software.value0,
                soft2: this.software.soft1,
                val2: this.software.value1,
                soft3: this.software.soft2,
                val3: this.software.value2,
                soft4: this.software.soft3,
                val4: this.software.value3,
                soft5: this.software.soft4,
                val5: this.software.value4,
                soft6: this.software.soft5,
                val6: this.software.value5

              },
              language: {
                language1: this.language.language0,
                language2: this.language.language1,
                language3: this.language.language2

              },

              hobby: {
                hobby1: this.hobby.hobby0,
                hobby2: this.hobby.hobby1,
                hobby3: this.hobby.hobby2,
                hobby4:this.hobby.hobby3
              }

            })
          })
        })
      )
        .subscribe()

    }
    else {

      this.db.collection('profile').doc(this.x).set({
        basicInfo: {
          name: this.basicInfo.name,
          email: this.basicInfo.email,
          phone: this.basicInfo.phonenumber,
          address: this.basicInfo.presentaddress,
          designation: this.basicInfo.designation,
          cvNo: this.information.basicInfo.cvNo,
          url: this.Downloadurl,
          objective: this.basicInfo.objective,
          linkedin: this.basicInfo.linkedin

        },
        qualification: {
          qualification1: {
            name: this.qualification.certificationname0,
            institute: this.qualification.institute0,
            cgpa: this.qualification.cgpa0,
            session: this.qualification.session0,
            description: this.qualification.description0
          },
          qualification2: {
            name: this.qualification.certificationname1,
            institute: this.qualification.institute1,
            cgpa: this.qualification.cgpa1,
            session: this.qualification.session1,
            description: this.qualification.description1
          },
          qualification3: {
            name: this.qualification.certificationname2,
            institute: this.qualification.institute2,
            cgpa: this.qualification.cgpa2,
            session: this.qualification.session2,
            description: this.qualification.description2
          }

        },
        skills: {
          programmingLanguage: this.skills.programming,
          framework: this.skills.framework,
          operating: this.skills.system,
          other: this.skills.other
        },
        projects: {
          project1: {
            topic: this.projects.topic0,
            description: this.projects.description0,
            year: this.projects.year0
          },
          project2: {
            topic: this.projects.topic1,
            description: this.projects.description1,
            year: this.projects.year1
          },
          project3: {
            topic: this.projects.topic2,
            description: this.projects.description2,
            year: this.projects.year2
          }
        },
        participation: {
          event1: {
            event: this.participation.event0,
            achievement: this.participation.achievement0,
            year: this.participation.time0
          },
          event2: {
            event: this.participation.event1,
            achievement: this.participation.achievement1,
            year: this.participation.time1
          },
          event3: {
            event: this.participation.event2,
            achievement: this.participation.achievement2,
            year: this.participation.time2
          }
        },
        onlineJudge: {
          judge1: {
            name: this.onlineJudge.judgeName0,
            achievement: this.onlineJudge.judgeAchievement0,
            id: this.onlineJudge.id0
          },
          judge2: {
            name: this.onlineJudge.judgeName1,
            achievement: this.onlineJudge.judgeAchievement1,
            id: this.onlineJudge.id1
          },
          judge3: {
            name: this.onlineJudge.judgeName2,
            achievement: this.onlineJudge.judgeAchievement2,
            id: this.onlineJudge.id2
          }
        },
        experience: {
          experience1: {
            company: this.experience.companyName0,
            designation: this.experience.designation0,
            from: this.experience.from0,
            to: this.experience.to0,
            description: this.experience.description0
          },
          experience2: {
            company: this.experience.companyName1,
            designation: this.experience.designation1,
            from: this.experience.from1,
            to: this.experience.to1,
            description: this.experience.description1
          },
          experience3: {
            company: this.experience.companyName2,
            designation: this.experience.designation2,
            from: this.experience.from2,
            to: this.experience.to2,
            description: this.experience.description2
          }
        },
        software: {
          soft1: this.software.soft0,
          val1: this.software.value0,
          soft2: this.software.soft1,
          val2: this.software.value1,
          soft3: this.software.soft2,
          val3: this.software.value2,
          soft4: this.software.soft3,
          val4: this.software.value3,
          soft5: this.software.soft4,
          val5: this.software.value4,
          soft6: this.software.soft5,
          val6: this.software.value5

        },
        language: {
          language1: this.language.language0,
          language2: this.language.language1,
          language3: this.language.language2

        },

        hobby: {
          hobby1: this.hobby.hobby0,
          hobby2: this.hobby.hobby1,
          hobby3: this.hobby.hobby2,
          hobby4:this.hobby.hobby3
        }

      })
    }



    alert('Your Profile Updated successfully');

  }

}

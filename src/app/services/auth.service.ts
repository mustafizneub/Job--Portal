import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data;

  constructor( private auth:AngularFireAuth,
    private router:Router,
    private afs:AngularFirestore,
    private afd:AngularFireDatabase) { }

    signUp(name,email,password,confirmPassword){

      if(password===confirmPassword){
        this.auth.auth.createUserWithEmailAndPassword(email,password).then(x=>{
          let user = this.auth.auth.currentUser;
          this.afs.collection('/account').doc(user.uid).set({
            name:name,
            email:email,
            role:'user'
          })
        }).then(x=>{
          let user = this.auth.auth.currentUser;
          this.afd.database.ref('/account' ).child(user.uid).set({
            name:name,
            email:email,
            role:'user'
          })
        });
        this.router.navigate(['/sign-in']);
      }
      else{
        alert('Password does not match.');
      }
      
    }

    signIn(email,password){
        this.auth.auth.signInWithEmailAndPassword(email,password).then(x=>{
        this.afs
        .collection('/account')
        .doc(this.getCurrentUserId())
        .valueChanges()
        .subscribe((e) => {
          let info = e;
          localStorage.setItem('user',JSON.stringify(info));
          localStorage.setItem('id', this.getCurrentUserId())
          localStorage.setItem('isLoggedIn', 'true');
        });
        
      });
      if(this.auth.auth.currentUser !=null){
        this.router.navigate(['']);
      }
      else{
        alert('Invalid email or password');
        this.router.navigate(['/sign-in']);
      }
      
    }

    getCurrentUserId(){
      
      return this.auth.auth.currentUser.uid;
    }
    
    signOut(){
      this.auth.auth.signOut().then(x=>{
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('id');
      })
    }

    removeUser(){
      this.auth.auth.currentUser.delete();
    }
    
}

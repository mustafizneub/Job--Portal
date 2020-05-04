import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  data;
  login = true;

  constructor( private authService:AuthService) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('isLoggedIn'));
    if(this.data==null){
       this.login=false;
    }
  }

  signout(){
    this.authService.signOut();
  }

}

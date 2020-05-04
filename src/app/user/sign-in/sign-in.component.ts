import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }
  login(form){
   
    let email= form.value.email;
    let password = form.value.password;
    this.authService.signIn(email,password);
    console.log(this.authService.getCurrentUserId());
  }

}

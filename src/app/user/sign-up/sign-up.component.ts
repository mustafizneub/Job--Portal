import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private authService:AuthService ) { }

  ngOnInit(): void {
    
  }
  signUp(form){
    let name = form.value.name;
    let email = form.value.email;
    let password = form.value.password;
    let confirmPassword = form.value.confirmPassword;

    this.authService.signUp(name,email,password,confirmPassword);
  }

}

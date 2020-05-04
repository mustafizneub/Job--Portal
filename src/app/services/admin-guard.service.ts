import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  
  
  constructor(private router:Router) {
    
    
  }

  canActivate(){
    let user = JSON.parse(localStorage.getItem('user'))
    let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    
    if(isLoggedIn === true && user.role === 'admin'){
      return true;
    };
    alert('access denied.');
    this.router.navigate(['/sign-in']);
    return false;
    
  }
}

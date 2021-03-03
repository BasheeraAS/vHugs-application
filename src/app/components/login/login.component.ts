import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: '<button (click)="loginWithRedirect()">Log in</button>'
  
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService, private router:Router, private loginService:LoginService) {}
  loginWithRedirect(){
   
    this.auth.loginWithRedirect({redirect_uri:'http://localhost:4200/post'});
     }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result)
          this.router.navigate(['/']);
        else 
          this.invalidLogin = true;
      })
  }

}

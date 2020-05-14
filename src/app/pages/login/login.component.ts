import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../success.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  signIn(credentials) {
    this.dialog.open(SuccessComponent)
    this.authService.login(credentials)    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { MatDialog } from '@angular/material';
import { SuccessComponent } from '../success.component'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;
  hide: boolean = true;

  constructor(
    private router: Router, 
    private authService: AuthService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  signIn(credentials) {
    console.log(credentials);   
  }

}

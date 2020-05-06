import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {  
  constructor( private http: HttpClient, private router: Router) { 

  }

  login(credentials) { 
    this.http.post('http://localhost:3000/api/authenticate', credentials)
    .subscribe(data => {
      if(data){
        this.router.navigate(['/private']);
      } else {
        this.router.navigate(['/'])
      }      
    })
  }
  

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  user$: Observable<User>;

  constructor( private http: HttpClient) { 

  }

  signUp(email: string, password:string){

  }


}

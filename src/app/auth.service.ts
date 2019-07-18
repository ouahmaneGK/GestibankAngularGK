import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authentificated : Boolean = false;

  constructor() { }

  auth(){
    this.authentificated = true; 
  }

  dis(){
    this.authentificated = false; 
  }

  isAuthentificated() : Boolean{
  return this.authentificated;
  }
}

import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user: User;
message: String;

  constructor(private userService: UserService,  private route: Router) { 
    this.user= new User(0,'', '', '', '');
  }

  register(){
     
    this.message=this.userService.addUser(this.user);
    console.log(this.user)
    this.route.navigateByUrl('/users');

  }

  ngOnInit() {
    
}

}
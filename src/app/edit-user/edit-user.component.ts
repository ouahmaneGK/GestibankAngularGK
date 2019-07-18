import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  message: String;

  constructor( private route: ActivatedRoute, private  userservice: UserService) {
    this.user= new User(0,'','','','');
   }

  ngOnInit() {
    this.user= this.userservice.getUsersById(this.route.snapshot.params.id);  
  }

  modify(){ 
      this.message=this.userservice.updateUser(this.user);
  }

}

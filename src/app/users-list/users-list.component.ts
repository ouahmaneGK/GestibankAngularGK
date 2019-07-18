
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService} from '../user.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userItems:  User [];
  user: User;

  constructor( private  userservice: UserService) { }

  ngOnInit() {
   this.userItems= this.userservice.getAllUsers();
  }

  supBtn(id: number){
    console.log("delete user with id " + id);
    this.userservice.deleteUser(id);
  }

/*   affichUser(id: number, user: any ){
    console.log("afficher user with id " + id);
    this.userservice.getUsersById(id);
    
  } */



}

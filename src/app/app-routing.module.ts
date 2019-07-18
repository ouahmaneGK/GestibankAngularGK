

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { OperationsComponent } from './operations/operations.component';
import { AuthGuard} from './auth-guard'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'users', 
  component: UsersListComponent, 
  children:[

  { path: 'add', component: AddUserComponent },
  { path: ':id', component: UserByIdComponent}, 
  { path: 'edit/:id', component: EditUserComponent},
  { path: 'op/:id', component: OperationsComponent},
    
  ], 
 }, 

 { path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { User } from './user';
import { Operations } from './operations';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//déclaration
users: User[]; 
operation: Operations[]

constructor() {
//initialisation
  this.users= [
  {
    id: 1,
    username: 'Amaria',
    adress: 'ihohezouh',
    email : 'amaria@gmail.com', 
    password:'partiruio'
  },
  {
    id: 2,
    username: 'Habiba',
    adress: 'ihohezouh',
    email : 'habiba@gmail.com',
    password:'partiruio'
  },
  {
    id: 3,
    username: 'Fabio',
    adress: 'ihohezouh',
    email : 'fabio@gmail.com', 
    password:'partiruio'
  }, 
  {
    id: 4,
    username: 'Pascal',
    adress: 'ihohezouh',
    email : 'pascal@gmail.com', 
    password:'partiruio'
  }
  
  ], 

  this.operation = [

    {
      id: 1,
      id_user: 4,
      type : 0,
      date : '22/06/2019', 
      montant : 1500
    },
    {
      id: 2,
      id_user: 3,
      type : 1,
      date : '22/06/2019', 
      montant : 2500
    },
    {
      id: 3,
      id_user: 2,
      type : 1,
      date : '22/06/2019', 
      montant : 3500
    }, 
    ,
    {
      id: 4,
      id_user: 2,
      type : 1,
      date : '22/06/2019', 
      montant : 700
    },
    {
      id: 5,
      id_user: 1,
      type : 1,
      date : '22/06/2019', 
      montant : 4500
    },
    {
      id: 6,
      id_user: 1,
      type : 1,
      date : '22/06/2019', 
      montant : 500
    }

  ]

}

  getAllUsers(){
    return this.users; 
  }

  getUsersById(id: number){
    const index= this.users.findIndex(d=> d.id==id);
    console.log(index);
    return this.users[index];
  }

  addUser(user: User): String{
/*   this.users.push(user);    
  return 'User has been added!' */

//On change de méthode afin d'incrémenter l'id 
  user.id=this.users.length+1;
   let newuser = JSON.stringify(user);
   const nu= JSON.parse(newuser);
   this.users.push(nu);
   console.log(this.users);
   return 'Utilisateur enregistré !'
  }


  updateUser(user: User): String{
    /* this.users.push(user);     */
    return 'User has been modified!'
  }

  deleteUser(id: number){
    const index= this.users.findIndex(d=> d.id==id);
    this.users.splice(index,1);    
   
  }

/*   getOperations(id: number){
    const index= this.operation.findIndex(d=> d.id_user==id);
    console.log(index);
    return this.operation[index];
  } */

  getOperations(id) : Operations[]{
  return this.operation.filter(d=> d.id_user==id);
    
  }

  opcli:Operations[];
  getSoldes(id){
   let sold=0
   this.opcli=this.getOperations(id);
   console.log("opcli"+this.opcli);

   this.opcli.map(o=> {
     if (o.type==0) {sold-= o.montant}
     else {sold+= o.montant}
   })

  /* for ( this.i=0; this.i<this.opcli.length; this.i++){
     if (this.opcli[this.i].type== 0){this.solde-= this.opcli[this.i].montant}
     else
     {this.solde+= this.opcli[this.i].montant}
   }  */
   return sold;
 }

}

import { Operations } from '../operations';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {


//Ma fonction 
/*   
  //operations du client identifié
  operations:  Operations[];

  constructor( private route: ActivatedRoute, private  userservice: UserService) {}


ngOnInit() {
    //Cette opération ne sert apparemment à rien 
    //this.operation= this.userservice.getOperations(this.route.snapshot.params.id);

    console.log(this.route.snapshot.params.id);

    this.route.queryParams.subscribe(queryParams =>{
      console.log(queryParams);
    })

    this.route.params.subscribe(routeParams => {
      console.log(routeParams.id);

      this.operations = this.userservice.getOperations(routeParams.id);
  });

  } */

operationscli: Operations[];
solde:number=0;
ids:number;
constructor( private route: ActivatedRoute, private  userservice: UserService) { }

 ngOnInit() {
   /* this.operationscli= this.userService.getOperation(this.route.snapshot.params.id); */
   console.log(this.route.snapshot.params.id)

   this.route.queryParamMap.subscribe(queryParams => {
     console.log(queryParams);
   })

   // pour s'abonner à la route dès qu'elle change tu affiche les changements
   this.route.params.subscribe(routeParams => {
     this.ids=routeParams.id;
     console.log(routeParams.id);
     this.operationscli= this.userservice.getOperations(routeParams.id);
     this.solde=this.userservice.getSoldes(this.ids);
   });

  }

}

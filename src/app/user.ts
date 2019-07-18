export class User {
    id: number;
    username: string;
    adress: string; 
    email: string;
    password: string; 

    constructor( id: number, username: string, adress: string, email: string, password: string){
        this.id=id; 
        this.username= username; 
        this.adress=adress;
        this.email=email;
        this.password=password;
        }
        
}

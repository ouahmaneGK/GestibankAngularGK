export class Operations {
    id : number;
    id_user: number;
    type: number;
    date: string;
    montant: number;

    constructor( id: number, id_user: number, type: number, date: string, montant: number){
        this.id=id; 
        this.id_user= id_user; 
        this.type=type;
        this.date=date;
        this.montant=montant;
        }

}

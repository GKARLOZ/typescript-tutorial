import {HasFormatter} from '../interfaces/HasFormatter.js';


// implementing HasFormatter will require this class to add a format() function cus it is part of the HasFomrmatter structure. 
export class payments implements HasFormatter{

    constructor(
      readonly recipient : string,
      private  details: string, 
      public   amount : number, 
    ){}
  
    format(){
  
      return `${this.recipient} owed Euro ${this.amount} for ${this.details}`;
  
    }
  
  }
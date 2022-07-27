import {HasFormatter} from '../interfaces/HasFormatter.js';


// implementing HasFormatter will require this class to add a format() function cus it is part of the HasFomrmatter structure. 
export class Invoice implements HasFormatter{

    constructor(
      readonly client : string,
      private  details: string, 
      public   amount : number, 
    ){}
  
    format(){
  
      return `${this.client} owes Euro ${this.amount} for ${this.details}`;
  
    }
  
  }
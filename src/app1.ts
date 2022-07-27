import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {payments} from './classes/payments.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


//list template insance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

//==================================================================================

let docOne: HasFormatter;// this will make sure docOne has the structure from HasFormatter in case Invoice didn't implement it
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 1200);
docTwo = new payments('mario','plumbing work', 2000);

//array that only objects that implement HasFormatter
let docs: HasFormatter[] = []; // If an object doesnt implement HasFormatter, it can't go in the array. 

docs.push(docOne);
docs.push(docTwo);

console.log(docs);


//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc0: HasFormatter;
  if(type.value === 'invoice'){

    doc0 = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  }else{

    doc0 = new payments(tofrom.value, details.value,amount.valueAsNumber)

  }

  //console.log('Interfaces with classes:  ',doc0);

  list.render(doc0, type.value, 'end'  );

});

 




//-------------------------------------Interfaces----------------------------------

interface IsPerson {

  name: string;
  age: number;
  speak(a: string) : void; // returns void cus it will use console.log
  spend(a: number) : number;

}

const me: IsPerson = {

  name: 'Gian',
  age: 99,
  speak( words: string): void {
    console.log(words);

  },
  spend(money: number): number {

    console.log('I have ',money);
    return money;
  }

};


// Testing Invoice from a different file by using import
const invOne1 = new Invoice('Importing DUDE', 'iMPORTED THE DUDE.', 90000  );
const invTwo1 = new Invoice('the dude','IMPORTING THE SECOND DUDE', 10000  );

console.log(invOne1, invTwo1);


let invoices1: Invoice[] = [];
invoices1.push(invOne1);
invoices1.push(invTwo1);

console.log(invoices1);



invoices1.forEach(inv => {

  console.log( inv.format()) });



//classes -----------------------------------------------------------------------------

class Invoice0{

  readonly client0:  string;
  private  details0: string;
  public   amount0:  number; 

  constructor(c: string, d: string, a: number){

      this.client0  = c;
      this.details0 = d;
      this.amount0  = a;
  }

  format(){

    return `${this.client0} owes Euro ${this.amount0} for ${this.details0}`;

  }

}

const invOne0 = new Invoice0('johnny', 'Johnny codes a program.', 90000  );
const invTwo0 = new Invoice0('juanny', 'Juanny codes a program.', 10000  );

console.log(invOne0, invTwo0);


let invoices0: Invoice0[] = [];
invoices0.push(invOne0);
invoices0.push(invTwo0);

console.log(invoices0);

invTwo0.amount0 = 10500;

invoices0.forEach(inv => {

  console.log( inv.format());

});


//classes -----------------------------------------------------------------------------

class Invoice2{

 

  constructor(

    readonly client: string,
    private  details: string, 
    public amount: number, 
  ){
  
  }

  format(){

    return `${this.client} owes Euro ${this.amount} for ${this.details}`;

  }

}

const invOne = new Invoice2('johnny', 'Johnny codes a program.', 90000  );
const invTwo = new Invoice2('juanny', 'Juanny codes a program.', 10000  );

console.log(invOne, invTwo);


let invoices: Invoice2[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invTwo.amount = 10500;

invoices.forEach(inv => {

  console.log(inv.format());

});




//-------------------------------Parse input----------------------------------------------

const anchor1 = document.querySelector('a')!;
if(anchor1) {
  console.log(anchor1.href);
}
console.log(anchor1.href);

//const form = document.querySelector('form')!;
const form1 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form1.children);

// inputs
const type1 = document.querySelector('#type') as HTMLInputElement;
const tofrom1 = document.querySelector('#tofrom') as HTMLInputElement;
const details1 = document.querySelector('#details') as HTMLInputElement;
const amount1 = document.querySelector('#amount') as HTMLInputElement;

form1.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type1.value, 
    tofrom1.value, 
    details1.value, 
    amount1.valueAsNumber
  );
});
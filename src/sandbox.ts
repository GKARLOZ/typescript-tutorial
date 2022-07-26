const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});


const circ = (x: number) => {

  return x * Math.PI;

}

console.log(circ(5));


let names = ['carlos', 'John'];

names.push('Gian');

let mixed = ['ken', 4, 5.6];

mixed.push('hello');
mixed.push(7)

console.log(mixed);


//objects

let ninja = {

  name: 'Naruto',
  clan: 'Uzumaki',
  age:  'Hella young'
};

ninja.age = '19';

console.log(ninja);


//explicit types 

let letters: string;
let num: number;

letters = 'hello';

num = 45;

//arrays------------------------------------------------------------
// It's best to initialize it with an empty array to push in more data
    // name        type     initialize empty array
let ninjaNinja: string[]   =     [];

ninjaNinja = ['one', 'two'];

console.log(ninjaNinja);

//unions types-------------------------------------------------------

//  mixing different types in an empty array
//             type  or type      initialize empty array
let mixing: (string | number)[] = [];

mixing.push('hello');
mixing.push(4);
console.log(mixing);

//objects ----------------------------------------------------------
let ninjaOne: object;

ninjaOne = {name: 'jo', age: 32};

let ninjaTwo: {

  name: string,
  age: number,
  clan: string, 

}
// the variable any -----------------------------

// the type any lets a variable change to a different type 
let a: any = 34;

a = true;
a= 'any';

a = {
  name :"joe"

};
console.log(a);


let mixArr: any[] = [];

mixArr.push(5);
mixArr.push('mario');

console.log(mixArr);

let mixNinja: {name:any, age:any};

mixNinja = {name:55, age:'hello'};

console.log(mixNinja);



//-------------------Directory solutions---------------------------
//  https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=7
// Since the js complile file is stored in a differe directory, you need to create a tsconfig file to direct the ts compiler to the right js file.  
// type ts --inint 
// that will create a ts config.json file and rootDir and outDir need to be modified. 
// testing results
console.log("successfully created a js file in the right directory");

//-------------------------Function-----------------------------------------

let greet: Function;

greet = () => {

  console.log('hello, again');

}

// Optional parameters
// the c variable can be optional or even undefined. 
const add = (a: number, b: number, c?: number | string ) => {

  console.log("a + b =", a + b);
  console.log("c = ",c);

}

add(5,8, 10);

//the c variable could be a (number or string) or default 22 

const add2 = (a: number, b: number, c: number | string = 22 ) => {

  console.log("a + b =", a + b);
  console.log("c = ",c);

}

add2(1,1);

//--------------Type Aliases------------------------------

// avoid repeating code

type StringOrNum = string | number; 
type objWitName = { name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {

  console.log(`${item} has uid of ${uid}`);


}

const greet2 = (user:objWitName) => {

  console.log(`${user.name} says hello`);
}

//-------------------------------------------------------------



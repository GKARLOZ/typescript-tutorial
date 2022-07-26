"use strict";
const character = 'luigi';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
const circ = (x) => {
    return x * Math.PI;
};
console.log(circ(5));
let names = ['carlos', 'John'];
names.push('Gian');
let mixed = ['ken', 4, 5.6];
mixed.push('hello');
mixed.push(7);
console.log(mixed);
//objects
let ninja = {
    name: 'Naruto',
    clan: 'Uzumaki',
    age: 'Hella young'
};
ninja.age = '19';
console.log(ninja);
//explicit types 
let letters;
let num;
letters = 'hello';
num = 45;
//arrays------------------------------------------------------------
// It's best to initialize it with an empty array to push in more data
// name        type     initialize empty array
let ninjaNinja = [];
ninjaNinja = ['one', 'two'];
console.log(ninjaNinja);
//unions types-------------------------------------------------------
//  mixing different types in an empty array
//             type  or type      initialize empty array
let mixing = [];
mixing.push('hello');
mixing.push(4);
console.log(mixing);
//objects ----------------------------------------------------------
let ninjaOne;
ninjaOne = { name: 'jo', age: 32 };
let ninjaTwo;
// the variable any -----------------------------
// the type any lets a variable change to a different type 
let a = 34;
a = true;
a = 'any';
a = {
    name: "joe"
};
console.log(a);
let mixArr = [];
mixArr.push(5);
mixArr.push('mario');
console.log(mixArr);
let mixNinja;
mixNinja = { name: 55, age: 'hello' };
console.log(mixNinja);
//-------------------Directory solutions---------------------------
//  https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=7
// Since the js complile file is stored in a differe directory, you need to create a tsconfig file to direct the ts compiler to the right js file.  
// type ts --inint 
// that will create a ts config.json file and rootDir and outDir need to be modified. 
// testing results
console.log("successfully created a js file in the right directory");
//-------------------------Function-----------------------------------------
let greet;
greet = () => {
    console.log('hello, again');
};
// Optional parameters
// the c variable can be optional or even undefined. 
const add = (a, b, c) => {
    console.log("a + b =", a + b);
    console.log("c = ", c);
};
add(5, 8, 10);
//the c variable could be a (number or string) or default 22 
const add2 = (a, b, c = 22) => {
    console.log("a + b =", a + b);
    console.log("c = ", c);
};
add2(1, 1);
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
//-------------------------------------------------------------

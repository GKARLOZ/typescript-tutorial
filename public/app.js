"use strict";
const anchor0 = document.querySelector('a');
if (anchor0) {
    console.log(anchor0.href);
}
console.log(anchor0.href);
//const form = document.querySelector('form')!;
const form0 = document.querySelector('.new-item-form');
console.log(form0.children);
const type0 = document.querySelector('#type');
const toform0 = document.querySelector('#toform');
const details0 = document.querySelector('#details');
const amount0 = document.querySelector('#amount');
form0.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('one');
    console.log(type0.value, toform0.value, details0.value, amount0.valueAsNumber);
});

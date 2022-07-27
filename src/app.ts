const anchor0 = document.querySelector('a')!;
if(anchor0){
  console.log(anchor0.href);
}
console.log(anchor0.href);

//const form = document.querySelector('form')!;
const form0 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form0.children);

const type0 = document.querySelector('#type') as HTMLInputElement;
const toform0 = document.querySelector('#toform') as HTMLInputElement;
const details0 = document.querySelector('#details') as HTMLInputElement;
const amount0 = document.querySelector('#amount') as HTMLInputElement;

form0.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log('one');

  console.log(
    type0.value,
    toform0.value,
    details0.value,
    amount0.valueAsNumber
  );   
});
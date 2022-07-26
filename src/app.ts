const form = document.querySelector('.new-item-form') as HTMLSelectElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {

e.preventDefault();

console.log(

    type.value,
    toform.value,
    details.value,
    amount.valueAsNumber
);

})


console.log('hello ');
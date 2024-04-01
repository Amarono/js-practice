let a = 5;
console.log('hello');

let c = 10;
let b = 5;
console.log(c === b);

const hours = 14;
const minutes = 20;
let message;

if (minutes > 0) {
  message = `${hours} г. ${minutes} хв.`;
} else {
  message = `${hours} г.`;
}

// const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

console.log(message);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

Array.toUppercase = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
};

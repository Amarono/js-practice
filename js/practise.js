// let a = 5;
// console.log('hello');

// let c = 10;
// let b = 5;
// console.log(c === b);

// const hours = 14;
// const minutes = 20;
// let message;

// if (minutes > 0) {
//   message = `${hours} г. ${minutes} хв.`;
// } else {
//   message = `${hours} г.`;
// }

// // const message = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(message);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Array.toUppercase = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i].toUpperCase();
//   }
// };

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating, aptDescr, aptPrice, aptTags);
// leng;

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//  const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

function addOverNum(value, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > value) {
      total += arg;
    }
  }
  return total;
}
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

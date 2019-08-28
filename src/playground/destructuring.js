// Object destructuring

// const person = {
//   name: "Oscar",
//   age: 29,
//   location: {
//     city: "CDMX",
//     temp: 25
//   }
// };

// const { name = "Anonimus", age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`Its ${temperature}° in ${city}`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

// Array destructuring

const adress = [
  "1299 S Jupiter Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [street, city, state = "New York", zip] = adress;

console.log(`You are in ${city} ${state}.`);

const item = ["cofee (hot)", "$2.00", "$2.50", "$2.75"];

const [beberage, , medium] = item;

console.log(`A medium ${beberage} costs ${medium}.`);

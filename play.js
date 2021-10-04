// const name = 'Takeshi';
// var age = 30;
// const hasHobbies = true;



// const summarizeUser = (userName, userAge, userHobby) => {
//   return (
//     'Name is ' +
//     userName +
//     ', age is' +
//     userAge +
//     'and the user has hobbies:' +
//     userHobby
//     );
// }

// const add = (a, b) => a + b;

// const addOne = a => a + 1;

// console.log(add(1, 2));
// console.log(addOne(1));

// console.log(summarizeUser(name, age, hasHobbies));


const person = {
  name: 'Takeshi',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const copiedPerson = {...person};
console.log(copiedPerson);

const toArray = (...args) => {
  return args;
}

console.log(toArray(1, 2, 3, 4));

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
const copiedArray = [...hobbies];
console.log(copiedArray);

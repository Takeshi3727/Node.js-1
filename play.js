const name = 'Takeshi';
var age = 30;
const hasHobbies = true;



const summarizeUser = (userName, userAge, userHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is' +
    userAge +
    'and the user has hobbies:' +
    userHobby
    );
}

const add = (a, b) => a + b;

const addOne = a => a + 1;

console.log(add(1, 2));
console.log(addOne(1));
console.log(summarizeUser(name, age, hasHobbies));


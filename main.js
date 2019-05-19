/*
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

----------------------//
(function foo(){
  // let a = 1;
  if(true){
    var a = 5;
  }
  console.log(a)
})()

----------------------//

var
let, const - block level scope

let age = 30;
age = 36;

const age = 30; 
*/

//----------------------//

// Strings, Numbers, Boolean, null, undefined, Symbol

const name = 'John'; //string
const age = 30; //number (int)
const rating = 4.5; //number (float)
const isCool = true; //boolean
const x = null; //null - has bogus type of object
const y = undefined; //undefined
let z; //undefined
console.log(typeof x);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
console.log(`My name is ${name} and I am ${age}`);
// or
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// String Properties & Methods
const s = 'technology, computers, it, code, awesome';
console.log(s.length); //gets the length of s
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(1, 17));
console.log(s.substring(1, 17).toUpperCase());
console.log(s.split('')); //split by letter
console.log(s.split(', ')); //split by comma

// Arrays == vars that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

const multiple = ['car', 324534, 45.3432, true, null]; //Multiple data types array
console.log(multiple);

console.log(multiple[2]); //print the 3rd element in array

multiple[5] = 'awesomeness'; //add a 6th element (awesomeness) to the array
console.log(multiple);

multiple.push('Victor'); //add an element (Victor) to the end of the array
console.log(multiple);

multiple.unshift('1'); //add an element (1) to the start of the array
console.log(multiple);

multiple.pop(); //removes last element (Victor) from the array
console.log(multiple);

console.log(Array.isArray(s)); //check if something is an array
console.log(Array.isArray(multiple)); //check if something is in the array

console.log(multiple.indexOf('car')); //find the index of an element in the array

// Object Literals

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
};

console.log(person.firstname, person.lastName, person.address); //print firstName, lastName, address
console.log(person.hobbies[1]); //print 2nd elem from hobbies array
console.log(person.address.city); //print city

/*
const { firstName, lastName } = person; //define elems at actual vars
                                        //pulls firstName and lastName out from person //object
console.log(firstName);
*/

const {
  firstName,
  lastName,
  address: { city }
} = person; //define elems at actual vars
console.log(person);

person.email = 'john@email.com'; // add a property to person
console.log(person);

const todos = [
  //array of objects
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
  }
];

console.log(todos);
console.log(todos[1].text); //print string of object within array

const todoJSON = JSON.stringify(todos); //convert to JSON
console.log(todoJSON);

// FOR Loops

for (let i = 0; i <= 10; i++) {
  //for(iterator/variable; condition to be met; increment)
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`); //template for concatenated string
}

// WHILE Loops

let i = 0; //var is set outside of the loop
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++; // if !i++ loop never ends
}

// Loop through array

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

for (let x of todos) {
  console.log(x.text);
} //FOR OF loop - this method is preffered over the classic FOR loop

// High Order Array Methods - these are preffered for operations involving arrays
// forEach, map, filter

todos.forEach(function(todo) {
  console.log(todo.text);
}); //forEach loop === for each elem in todos array pass todo function and get each elem text

todos.forEach(todo => console.log(todo.text));

const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText); //map loop === loop through and return a new array of just the text values

const todoCompleted = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  }) //this part returns an array of all todoes that are completed (true)
  .map(function(todo) {
    return todo.text;
  }); //this part returns an array of the text of all todoes that are completed (true)
console.log(todoCompleted); //filter loop

// Conditionals

/**********
== doesn't match data types
=== matches data types
**********/

const r = 4;
const q = 10;

if (q == 10) {
  console.log('q is 10');
} else if (q > 10) {
  console.log('q is greater than 10');
} else {
  console.log('q is NOT 10');
} // IF conditional

if (r > 3 && q > 10) {
  console.log('r is more than 5 AND y is more than 10');
} else if (r > 3 || q > 10) {
  console.log('r is more than 5 OR y is more than 10');
} else {
  console.log('&&, || and ! are JS logical operators');
} // using logical operators

const voteAge = 18; // using ternary operators ? (==then) and : (==else)
const votable = voteAge < 18 ? 'Too Young' : 'Old Enough';
console.log(votable);
// if var "voteAge" is a value below 18, THEN the value of var "voteable" will be "Too Young", ELSE the value of var "voteable" will be "Old Enough"

switch (votable) {
  case 'Too Young':
    console.log('Person not of legal voting age');
    break;
  case 'Old Enough':
    console.log('Person of legal voting age');
    break;
  default:
    console.log('Hacker');
    break;
} //using a switch to check the state of a condition

//defining a function
function addNums(num1 = 1, num2 = 1) {
  //1, 1 are set as default values for num1, num2
  return num1 + num2;
}
console.log(addNums(5, 4));
//by putting in 5, 4 we overwrite the default values of num1, num2

// Arrow functions
const addNums2 = (num1 = 1, num2 = 1) => num1 + num2; //return num1 + num2
console.log(addNums2(4, 8));

const addNums3 = num1 => num1 + 5;
console.log(addNums3(20));

// Constructing objects

//Constructor function
function Person(fistName, lastName, dob) {
  this.firstName = fistName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function() {
    return this.dob.getFullYear(); //added method getBirthYear to Person object
  };
  this.getName = function() {
    return `${this.firstName} ${lastName}`; //added method getName to Person object
  };
}

// Instatiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Moore', '4-5-1996');
const person3 = new Person('Dave', 'Smith', '8-11-1989');

console.log(person2.dob.getFullYear()); //plenty of methods for dates in JS
console.log(person1.getBirthYear());
console.log(person3.getName());

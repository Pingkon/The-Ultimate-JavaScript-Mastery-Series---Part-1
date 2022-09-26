// // // Variables

// let name = "Mosh";
// console.log(name);

// // Cannot be a reserved keyword
// // Should be meaningful
// // Cannot start with number (1name)
// // Cannot contain a space or hyphen (-)
// // Are case-sensitive

// let firstName = 'Mosh';
// let lastName = 'Hamedani';

// -------------------------------------------------

// // // Constants

// // Willing to not let the value of a variable to change or reassigned.

// const interestRate = 0.3;
// console.log(interestRate);
// // interestRate = 1; // Must throw an error
// // console.log(interestRate);

// -------------------------------------------------

// // // Primitive Types

// // String
// // Number
// // Boolean
// // undefined
// // null

// let name = 'Mosh'; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firtName = undefined; 
// let selectedColor = null;

// -------------------------------------------------

// // // Objects

// // Object is Reference Type
// // When dealing with multiple related variable, object is declared, where it has several properties.

// let name = 'Mosh';
// let age = 30;

// let person = {
//     name: 'Most',
//     age: 30
// }

// console.log(person);

// // Dot Notation
// person.name = 'John';

// console.log(person.name);

// // Bracket Notation
// person['name'] = 'Mary';

// console.log(person['name'])

// -------------------------------------------------

// // // Arrays

// // Array is Reference Type
// // Arry is an Object.
// // When dealing with list of elements, array is declared.

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors[0]); // displays 'red'

// // Lenght of an array are dymanic.

// selectedColors[2] = 'green';
// console.log(selectedColors);

// selectedColors[2] = 1;
// console.log(selectedColors);

// -------------------------------------------------

// // // Functions

// //Performing a task

// function greet(name) {
//     console.log('Hello ' + name);
// }
// // name (the variable inside the parentheses while declaring the function) is called the parameter

// greet('John');
// // 'John' (the text/value inside the parentheses while callinng the function) is called the arguement

// greet('Mary');

// function greetings(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greetings('John', 'Smith');

// -------------------------------------------------

// // // Types of Functions

// // Calculating a value

// function square(number) {
//     return number*number;
// }

// console.log(square(2))

// -------------------------------------------------

// // // Arithmetic Operators

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// //Increment (++)
// console.log(x);
// console.log(++x); // incremented first
// console.log(x);

// console.log(x);
// console.log(x++); // incremented later
// console.log(x);

// //Decrement (--)
// console.log(x);
// console.log(--x); // decremented first
// console.log(x);

// console.log(x);
// console.log(x--); // decremented later
// console.log(x);

// -------------------------------------------------

// // // Assignment Operators

// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// -------------------------------------------------

// // // Comparison Operators

// let x = 1;

// // Relational
// console.log (x>0);
// console.log (x>=0);
// console.log (x<1);
// console.log (x<=1);

// // Equality
// console.log(x === 1);
// console.log(x !== 1);

// -------------------------------------------------

// // // Ternary Operator

// // If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(typle);

// -------------------------------------------------

// // // Logical Operators with Non-booleans

// Falsy (false)
// undefined
// null
// 0
// ''
// NaN

// // Anything that is not Falsy -> Truthy

// console.log(false || true); // returns true
// console.log(false || 'Mosh'); //returns 'Mosh'
// console.log(false || 1); // returns 1
// console.log(false || 1 || 2); // returns 1 (Short-circuiting)

// let userColor = '';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// -------------------------------------------------

// // // Operators Precedence

// let x = 2 + 3 * 4; // PEDMAS
// let y = (2 + 3) * 4; // PEDMAS

// console.log(x);
// console.log(y);

// -------------------------------------------------

// // // If...else

// // Hour
// // If hour is between 6am and 12pm: Good morning!
// // If it is between 12pm and 6pm: Good afternoon!
// // Otherwise: Good evening;

// let hour = 14;

// if (hour>=6 && hour < 12) {
//     console.log('Good morning');
// }

// else if (hour>=12 && hour < 18) {
//     console.log('Good afternoon');
// }

// else {
//     console.log('Good evening');
// }

// -------------------------------------------------

// // // Switch...case

// let role = 'guest';

// switch (role) {
//     case 'guest' :
//         console.log('Guest User');
//         break;

//     case 'moderator' :
//         console.log('Moderaor User');
//         break;

//     default:
//         console.log('Unknown User');
// }

// -------------------------------------------------

// // // For

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');

// for (let i = 0; i<5; i++){
//     console.log('Hello World', i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// -------------------------------------------------

// // // While

// let i = 0;

// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// -------------------------------------------------

// // // do-while

// let i = 0;

// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// -------------------------------------------------

// // // Infinite Loops

// // Before uncommenting, run the file in a seperate window, or else the brower will crash.

// // let i = 0;
// // while (i<5){
// //     console.log(i);
// // }

// while (true) {
// }

// do {
// } while (x<5)

// for (let i = 0; i < 10){
// }

// -------------------------------------------------

// // // For...in

// // Iterate over the properties of an Object

// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// // Dot Notation
// person.name

// // Bracket Notation
// person['name']

// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//     console.log(index, colors[index]);
// }

// -------------------------------------------------

// // // For...of

// // Iterate item/elements of an Array

// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
// console.log(color);

// -------------------------------------------------

// // // Break and Continue

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break; // we jump out of the loop

//     if (i % 2 === 0){
//         i++;
//         continue; // we jump to the next iteration
//     }
//     console.log(i);
//     i++;
// }

// -------------------------------------------------

// // // Exercise 1- Max of Two Nummbers

// // Write a function that take two numbers and returns the maximum of the two.

// function maxOfTwoNumbers (a, b) {
//     // if (a >= b) return a;
    
//     // return b;

//     return (a >= b) ? a : b; // cleaner version
// }

// console.log(maxOfTwoNumbers(100, 57));

// -------------------------------------------------

// // // Exercise 2- Landscape or Portrait

// function isLandscape (width, height) {
//     return (width > height) ? true : false;
// }

// console.log(isLandscape(500, 300));

// -------------------------------------------------

// // // Exercise 3- FizzBuzz

// // Divisible by 3 => Fizz
// // Divisible by 5 => Buzz
// //Divisible by both 3 and 5 => FizzBuzz
// // Not divisible by 3 or 5 => input
// // Not a number => 'Not a number'

// const output = fizzBuzz(5);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')  return 'Not a number'
//     else if (input % 5 === 0 && input % 3 === 0) return 'FizzBuzz';
//     else if (input % 3 === 0) return 'Fizz';
//     else if (input % 5 === 0) return 'Buzz';
// }

// -------------------------------------------------

// // // Exercise 4- Demerit Points

// // Speed Limit = 70
// // 5 -> 1 point
// // Math.floor(1.3)
// // 12 points -> suspended

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint)
//         console.log('Ok')
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if(points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points', points);
//     }
// }

// checkSpeed(130);

// -------------------------------------------------

// // // Exercise 5- Even and Odd Numbers

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         console.log((i % 2 === 0) ? i + ' "EVEN"' : i + ' "ODD"');
//     }
// }

// showNumbers(10)

// -------------------------------------------------

// // // Exercise 6- Count Truthy

// const array = [0, 0, 5, 10, 4, 1, 2, 3];
// let count = 0;

// function countTruthy (array) {
//     for (let value of array) {
//         if (value) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countTruthy(array));

// -------------------------------------------------

// // // Exercise 7- String Properties

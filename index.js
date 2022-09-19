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


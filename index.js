"use strict";
// 1. Write a ts program to print day of week name using switch case.
// var printDayOfWeek = (dayNumber: any) => {
//     switch (dayNumber) {
//         case `1`:
//             console.log("Sunday");
//             break;
//         case `2`:
//             console.log("Monday");
//             break;
//         case `3`:
//             console.log("Tuesday");
//             break;
//         case `4`:
//             console.log("Wednesday");
//             break;
//         case `5`:
//             console.log("Thursday");
//             break;
//         case `6`:
//             console.log("Friday");
//             break;
//         case `7`:
//             console.log("Saturday");
//             break;
//         default:
//             console.log("Invalid day number");
//     }
// };
// printDayOfWeek(prompt(`Enter a number`));
// 2. Write a ts program print total number of days in a month using switch case.
// var month = (printMonth: any) => {
//     printMonth = parseInt(printMonth);
//     switch (printMonth) {
//         case 1:
//             console.log("JAnuary : 31 days");
//             break;
//         case 2:
//             console.log("28/29 days");
//             break;
//         case 3:
//             console.log("31 days");
//             break;
//         case 4:
//             console.log("30 days");
//             break;
//         case 5:
//             console.log("31 days");
//             break;
//         case 6:
//             console.log("30 days");
//             break;
//         case 7:
//             console.log("31 days");
//             break;
//         case 8:
//             console.log("31 days");
//             break;
//         case 9:
//             console.log("30 days");
//             break;
//         case 10:
//             console.log("31 days");
//             break;
//         case 11:
//             console.log("30 days");
//             break;
//         case 12:
//             console.log("31 days");
//             break;
//         default:
//             console.log("Please enter month number between 1-12");
//     }
// }
// month(prompt(`Enter a number from 1 - 12`))
// // 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var alphabet = (chkvowel: any) => {
//     switch (chkvowel) {
//         case `A`:
//             console.log(`This is vowel`);
//             break;
//         case `E`:
//             console.log(`This is vowel`);
//             break;
//         case `I`:
//             console.log(`This is vowel`);
//             break;
//         case `O`:
//             console.log(`This is vowel`);
//             break;
//         case `U`:
//             console.log(`This is vowel`);
//             break;
//         case `a`:
//             console.log(`This is vowel`);
//             break;
//         case `e`:
//             console.log(`This is vowel`);
//             break;
//         case `i`:
//             console.log(`This is vowel`);
//             break;
//         case `o`:
//             console.log(`This is vowel`);
//             break;
//         case `u`:
//             console.log(`This is vowel`);
//             break;
//         default:
//             console.log(`This is consonant`);
//             break;
//     }
// };
// alphabet(
//     prompt(`Enter an alphabet to know which is vowel or consonant`)
// );
// // 4. Write a ts program to find maximum between two numbers using switch case.
// var max = (comparenum: any, comparenumber1: any) => {
//     switch (comparenum) {
//         case comparenum > comparenumber1:
//             console.log(`The number`, comparenum`is greater than`, comparenumber1);
//             break;
//         case comparenumber1 > comparenum:
//             console.log(`The number`, comparenumber1`is greater than`, comparenum);
//             break;
//         default:
//             console.log(`The number`, comparenumber1`is equal to`, comparenum);
//             break;
//     }
// };
// max (prompt(`Enter 1st num`), prompt(`Enter 2nd num`));
// }
// // 5. Write a ts program to check whether a number is even or odd using switch case.
//     var chkeven: any = prompt(`Enter a number to know which  is odd or even`);
//     switch (true) {
//         case chkeven % 2 == 0:
//             console.log(`This is even number :`, chkeven);
//             break;
//         case chkeven % 2 !== 0:
//             console.log(`This is odd number`, chkeven);
//             break;
//         case chkeven == 0:
//             console.log(`This number is zero`, chkeven);
//             break;
//         default:
//             console.error(`Enter a number`);
//             break;
//     }
// }
// // 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// var number: any = prompt(
//     `Enter a number to know which number is positive ,negative or zero `
// );
// switch (true) {
//     case number > 0:
//         console.log(`The number is positive :`, number);
//         break;
//     case number < 0:
//         console.log(`The number is negative :`, number);
//         break;
//     case number == 0:
//         console.log(`The number is zero :`, number);
//         break;
//     default:
//         console.error(`please enter a number`);
//         break;
// }
// 7. Write a ts program to create Simple Calculator using switch case.
var value1 = prompt(`Enter first number`);
var val3 = parseInt(value1);
var signOfplus = prompt(`enter a signOfplus of +,-,/,*`);
var value2 = prompt(`Enter second number`);
var val4 = parseInt(value2);
switch (signOfplus) {
    case `/`:
        console.log(` division between two numbers, number1:, ${val3} and number2: ${val4} is = ${val3 / val4}`);
        break;
    case `*`:
        console.log(`Multiplication of two numbers, number1: ${val3}, and number2:, ${val4} is = ${val3 * val4}`);
        break;
    case `-`:
        console.log(` subtraction between two numbers, number1: ${val3} and number2: ,${val4} is = ${val3 - val4}`);
        break;
    default:
        console.log(`addition between  two numbers, number1: ${val3} number2:  ${val4} is =  ${val3 + val4}`);
        break;
}

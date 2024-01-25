function solve(num1, num2, num3) {
    'use strict';

    const sum = (first, second) => first + second;
    const substract = (first, second) => first - second;

    const resutl = substract(sum(num1, num2), num3);

    console.log(resutl)


   // Function to calculate the sum of the first two integers
// function sum(num1, num2) {
//     return num1 + num2;
// }

// // Function to subtract the result of the sum from the third integer
// function subtract(result, num3) {
//     return result - num3;
// }

// // Example usage:
// const num1 = 5;
// const num2 = 8;
// const num3 = 3;

// // Calculate the sum of the first two integers
// const sumResult = sum(num1, num2);

// // Subtract the result of the sum from the third integer
// const finalResult = subtract(sumResult, num3);


}
solve(23,
    6,
    10
    )
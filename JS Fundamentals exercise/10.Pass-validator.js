function solve(password) {
    'use strict';

    const lengthRegex = /^.{6,10}$/; // Rule 1: Check length (between 6 and 10 characters)
    const formatRegex = /^[a-zA-Z0-9]+$/; // Rule 2: Check if it consists only of letters and digits
    const digitRegex = /\d/g; // Rule 3: Check if it has at least 2 digits


    if (!lengthRegex.test(password)) {
        console.log("Password must be between 6 and 10 characters");
    } if (!formatRegex.test(password)) {
        console.log("Password must consist only of letters and digits");
    } if ((password.match(digitRegex) || []).length < 2) {
        console.log("Password must have at least 2 digits");
    }
    if (lengthRegex.test(password) && formatRegex.test(password) && (password.match(digitRegex) || []).length >= 2) {
        console.log("Password is valid");
    }
}

solve('Pa$s$s')
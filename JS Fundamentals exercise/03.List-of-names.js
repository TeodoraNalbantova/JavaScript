function solve(listOfNames) {
    'use strict';
    listOfNames.sort((a,b) => a.localeCompare(b));
    for (let index = 1; index <= listOfNames.length; index++) {
        console.log(`${index}.${listOfNames[index-1]}`)
    }
}
solve(["John", "Bob", "Christina", "Ema"]);
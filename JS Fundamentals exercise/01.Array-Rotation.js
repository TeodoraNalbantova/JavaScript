function solve(inputArray,numberofRotations) {
   "use strict";
   for (let index = 0; index < numberofRotations; index++) {
    const firstElement  = inputArray.shift();
    inputArray.push(firstElement)
    
   }
    

    console.log(inputArray.join(" "));
}
solve([51, 47, 32, 61, 21], 2);
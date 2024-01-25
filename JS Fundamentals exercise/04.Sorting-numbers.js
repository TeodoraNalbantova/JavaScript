function solve(inputarray) {
    'use strict';
   inputarray.sort((a,b) => a - b)

   const result = [];

   while(inputarray.length > 0)
   {
    const firstElement = inputarray.shift()
    // взима пъривят елемент
    const lastElement = inputarray.pop()
    // взима последния

    result.push(firstElement)

    if(lastElement !== undefined){
        result.push(lastElement)
    }
   }

   return result;
    
   } 

console.log (solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
function solve(input) {
    "use strict";
    const words = input.toLowerCase().split(' ');
    const occurrences = {};
   
    words.forEach(word => {
        occurrences[word] = (occurrences[word] || 0) + 1;
    });
    //occurrences[word] = (occurrences[word] !== undefined) ? occurrences[word] + 1 : 1;


    const oddOccurrences = [];
    for (const word in occurrences) {
        if (occurrences[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }

    console.log(oddOccurrences.join(' '));
}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
function Cinema(inputArray) {
    const numberOfMovies = parseInt(inputArray[0]);
    const allMovies = inputArray.slice(1, numberOfMovies + 1);
    const allCommands = inputArray.slice(numberOfMovies + 1);

    for (let i = 0; i < allCommands.length; i++) {
        const rawParams = allCommands[i].split(" ");
        const commandName = rawParams[0];

        if (commandName === "Sell") {
            if (allMovies.length > 0) {
                const soldMovie = allMovies.shift();
                console.log(`${soldMovie} ticket sold!`);
                //shift се използва за премахване на първия елемент от масива.


            }
        }
        else if (commandName === "Add") {
            const movieToAdd = allCommands[i].substring(4); // Get everything after "Add "// за да вземе частта на командата "Add", която следва след ключовата дума "Add ".
            allMovies.push(movieToAdd);
            //push се използва за добавяне на елементи в края на масива.
        }
        else if (commandName === "Swap") {
            const startIndex = parseInt(rawParams[1]);
            const endIndex = parseInt(rawParams[2]);

            if (startIndex >= 0 && startIndex < allMovies.length && endIndex >= 0 && endIndex < allMovies.length) {
                [allMovies[startIndex], allMovies[endIndex]] = [allMovies[endIndex], allMovies[startIndex]];
                console.log("Swapped!");
            }
        }
        else if (commandName === "End") {
            if (allMovies.length > 0) {
                console.log("Tickets left:", allMovies.join(', '));
            } else {
                console.log("The box office is empty");
            }
        }
       
    }
}


Cinema(['3','Avatar', 'Titanic', 'Joker', 'Sell', 'Swap 0 1', 'End'])	

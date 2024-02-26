function library(input) {
    const numberOFBooks = parseInt(input[0]);
    let books = input.slice(1, numberOFBooks + 1);
    let allCommands = input.slice(numberOFBooks + 1);

    for (let i = 0; i < allCommands.length; i++) {
        const rawParams = allCommands[i].split(" ");
        const commandName = rawParams[0];

        if (commandName === "Lend") {
            if (books.length > 0) {
                const lendbook = books.shift();
                console.log(`${lendbook} book lent!`)
            }


        } else if (commandName === "Return") {
            const returnedbook = allCommands[i].substring(7);
            // друг начин - > const returnedBook = rawParams.slice(1).join(" ");

            books.unshift(returnedbook);

        }
        else if (commandName === "Exchange") {
            const startIndex = parseInt(rawParams[1]);
            const endIndex = parseInt(rawParams[2]);
            if (startIndex >= 0 && startIndex < books.length && endIndex >= 0 && endIndex < books.length) {
                [books[startIndex], books[endIndex]] = [books[endIndex], books[startIndex]];
                console.log("Exchanged!");
            }


        } else if (commandName === "Stop") {
            break;
        }
        else {
            continue;
        }
    }

        if (books.length > 0){
            console.log("Books left:", books.join(", "));}
        else {
            console.log("The library is empty");
        }


    }


    library(['3', 'Harry Potter', 'The Lord of the Rings', 'The Hunger Games', 'Lend', 'Stop', 'Exchange 0 1'])
    library(['3', 'The Da Vinci Code', 'The Girl with the Dragon Tattoo', 'The Kite Runner', 'Lend', 'Lend', 'Lend', 'Stop'])
function shop(input) {
    const numberOfProducts = parseInt(input[0]);
    let allProducts = input.slice(1, numberOfProducts + 1);
    const allCommands = input.slice(numberOfProducts + 1);

    for (let i = 0; i < allCommands.length; i++) {
        const rawParams = allCommands[i].split(" ");
        const commandName = rawParams[0];

        if (commandName === "Sell") {
            if (allProducts.length > 0) {
                const soldProduct = allProducts.shift();
                console.log(`${soldProduct} product sold!`);
            }
        }
        else if (commandName === "Add") {
            const productToAdd = allCommands[i].substring(4); // Get everything after "Add ".
            allProducts.push(productToAdd);
        }
        else if (commandName === "Swap") {
            const startIndex = parseInt(rawParams[1]);
            const endIndex = parseInt(rawParams[2]);

            if (!isNaN(startIndex) && !isNaN(endIndex) && startIndex >= 0 && startIndex < allProducts.length && endIndex >= 0 && endIndex < allProducts.length) {
                [allProducts[startIndex], allProducts[endIndex]] = [allProducts[endIndex], allProducts[startIndex]];
                console.log("Swapped!");
            } else {
                console.log("Invalid indexes. Ignoring command.");
            }
        }
        else if (commandName === "End") {
            break;
        }
    }

    if (allProducts.length > 0) {
        console.log("Products left:", allProducts.join(', '));
    } else {
        console.log("The shop is empty");
    }
}

// Example usage:
shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']);

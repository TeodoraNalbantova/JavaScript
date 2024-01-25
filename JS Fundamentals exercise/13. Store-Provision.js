function solve(currentStock,orderedStock) {
    "use strict";

  const storeStock ={};
      // Fill in the current stock

  for (let index =0; index < currentStock.length; index += 2){
    const stockName = currentStock[index]
    const stockAmount = parseInt(currentStock[index + 1])

storeStock[stockName] = stockAmount;

  }
    // Process the ordered stock
for ( let index = 0; index < orderedStock.length; index += 2)
{
    const stockName = orderedStock[index]
    const stockAmount = parseInt(orderedStock[index + 1], 10)

 // Product already exists in the store, increase quantity

    if (storeStock[stockName] !== undefined){
        storeStock[stockName] += stockAmount
    }else {
// Product is not in the store, add it to the inventory

        storeStock[stockName] = stockAmount
    }
}
    // Print the final inventory

Object.keys(storeStock).forEach((currentItemName) => console.log (`${currentItemName} -> ${storeStock[currentItemName]}`))
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
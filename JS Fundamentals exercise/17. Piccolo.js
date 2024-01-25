function solve(carsArray) {
    "use strict";

    const parkedCars = [];

    for (const carInfo of carsArray) {
        const [direction, carNumber] = carInfo.split(", ");

        if (direction === "IN") {
            if (!parkedCars.includes(carNumber)) {
                parkedCars.push(carNumber);
            }
        } else if (direction === "OUT") {
            const index = parkedCars.indexOf(carNumber);
            if (index !== -1) {
                parkedCars.splice(index, 1);
            }
            //Методът splice(index, 1) премахва един елемент от масива, като започва от индекс index. Вторият аргумент (1 в този случай) определя колко елемента да бъдат премахнати. Така че, в този конкретен случай, се премахва само един елемент от масива на определения индекс.
        }
    }

    if (parkedCars.length > 0) {
        parkedCars.sort((a, b) => a.localeCompare(b));
        console.log(parkedCars.join('\n'));
    } else {
        console.log("Parking Lot is Empty.");
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

function solve(array) {
    "use strict";
    const heroes = [];

for (const heroInfo of array){
    const [name, level, itemsString] = heroInfo.split(" / ");
    const hero = {
        name: name,
        level: Number(level),
        items: itemsString ? itemsString.split(", ") : []
        //This line is using the ternary operator (? :) to conditionally assign a value to the items property of the hero object.
//         If itemsString is truthy (not an empty string), it assigns the result of splitting itemsString into an array using ", " as the delimiter.
// If itemsString is falsy (an empty string), it assigns an empty array ([])
    };
    heroes.push(hero);

}
heroes.sort((a, b) => a.level - b.level);
for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
// The comparator function (a, b) => a.level - b.level compares two elements (a and b) based on their level properties.
// If the result of the subtraction (a.level - b.level) is negative, it means a should come before b in the sorted array.
// If it's positive, it means b should come before a.
// If it's zero, the order remains unchanged.
}
}


solve ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
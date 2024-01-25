function solve(words, template) {
    'use strict';

    // Разделяме думите и шаблона в масиви
    const separeteWords = words.split(", ")
    const templeteWords = template.split(" ")
    
    // Инициализираме празен низ, в който ще съхраняваме крайния резултат
    let result = '';

    // Обхождаме всеки елемент от масива templateWords

    for (const templateWord of templeteWords) {
    // Проверяваме дали първият символ на текущата дума в шаблона е "*"

        if (templateWord[0] === "*") {
    // Търсим съответната дума в separateWords, която има същата дължина

            const correspondingWord = separeteWords.find(x => x.length === templateWord.length)
    // Ако намерим съответната дума, добавяме я към резултата
            result += `${correspondingWord} `
        } else {
     // Ако първият символ не е "*", добавяме текущата дума от шаблона

            result += `${templateWord} `
        }
    }
    console.log(result);


// ДРУГ НАЧИН С REPLACE 
// const separateWords = words.split(", ");
// for ( const separateWord in separateWords){
//     templete = template.replace("*".repeat(separateWord.length). separateWord);
// }
// console.log(template)


}
solve('great',
'softuni is ***** place for learning new programming languages'
)

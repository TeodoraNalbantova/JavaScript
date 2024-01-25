function checkForWord(word, text) {
    // Convert both the word and the text to lowercase for case-insensitive comparison
    const lowercasedWord = word.toLowerCase();
    const lowercasedText = text.toLowerCase();

    // Check if the lowercased word is present in the lowercased text
    if (lowercasedText.includes(lowercasedWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

checkForWord('python',
'JavaScript is the best programming language'
);

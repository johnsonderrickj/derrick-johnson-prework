displayWins = document.querySelector('#wins');
displayWord = document.querySelector('#currentWord');
displayGuesses = document.querySelector('#remainingGuesses');
displayWrong = document.querySelector('#lettersGuessed');
displayLast = document.querySelector('#lastWord');

const wordList = ['baldelli', 'adrianza', 'arraez', 'astudillo', 'berrios', 'buxton', 'cruz', 'donaldson', 'garver', 'kepler', 'polanco', 'rosario', 'sano'];
var chosenWord = wordList[Math.floor(Math.random() * words.length)];
var winCount = 0;
var guesses = 12;
var hotWord = [];
var wrongLetters = [];

function update() {
    displayWins.innerText = winCount;
    displayWord.innerText = hotWord.join('');
    displayGuesses.innerText = guesses;
    displayWrong.innerText = wrongLetters.join(' ');
}

function newGame() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    guesses = 12;
    hotword = [];
    wrongLetters = [];
    for (let i = 0; i < chosenWord.length; i++){
        hotWord[i] = ' _ ';
    }
    update();
}

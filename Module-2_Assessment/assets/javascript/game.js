const words = ['baldelli', 'adrianza', 'arraez', 'astudillo', 'berrios', 'buxton', 'cruz', 'donaldson', 'garver', 'kepler', 'polanco', 'rosario', 'sano'];

var chosenWord = words[Math.floor(Math.random() * words.length)];

var wins = document.querySelector('#wins');
var current = document.querySelector('#currentWord');
var remain = document.querySelector('#remainingGuesses');
var letters = document.querySelector('#lettersGuessed');

var winCount = 0;
var guesses = 12;
var hotWord = [];
var wrongLetters = [];
var lastWord;

for (let i = 0; i < chosenWord.length; i++){
    hotWord[i] = ' _ ';
}

wins.innerText = winCount;
current.innerText = hotWord.join('');
remain.innerText = guesses;
letters.innerText = wrongLetters.join(' ');

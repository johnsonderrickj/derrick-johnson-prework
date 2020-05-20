const wordList = ['adrianza', 'arraez', 'astudillo', 'berrios', 'buxton', 'cruz', 'donaldson', 'garver', 'gonzalez', 'kepler', 'odorizzi', 'polanco', 'rosario', 'sano'];
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];

var displayWins = document.querySelector('#wins');
var displayWord = document.querySelector('#currentWord');
var displayGuesses = document.querySelector('#remainingGuesses');
var displayWrong = document.querySelector('#lettersGuessed');
var displayLast = document.querySelector('#lastWord');

var winCount;
var guesses;
var correctGuesses;
var wrongGuesses;
var lastWord;

function chooseWord () {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
}

function initializeGame() {
    word = chosenWord;
    guesses = 12;
    wrongGuesses = [];
    correctGuesses = [];
    winCount = 0;
  
    // initialize correctGuesses array with underscores
    for (var i = 0; i < word.length; i++) {
      correctGuesses.push('_');
    }
  
    displayWord.innerHTML = correctGuesses.join(' ');
    displayGuesses.innerHTML = guesses;
}

function newWord() {
    chooseWord();
    word = chosenWord;
    guesses = 12;
    wrongGuesses = [];
    correctGuesses = [];
    for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
    }
    winCount++;
    displayWord.innerHTML = correctGuesses.join(' ');
    displayGuesses.innerHTML = guesses;
    displayWrong.innerHTML = wrongGuesses;
    displayWins.innerHTML = winCount;
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};

function updateGuesses(letter) {
    if (word.indexOf(letter) === -1 && !wrongGuesses.includes(letter)) {
      wrongGuesses.push(letter);
      displayWrong.innerHTML = wrongGuesses.join(', ');
      guesses--;
      displayGuesses.innerHTML = guesses;
    } else {
      for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          correctGuesses[i] = letter;
          displayWord.innerHTML = correctGuesses.join(' ');
        }
      }
     
    }
}

function goodjob() {
    displayLast.innerHTML = 'The last player was '+lastWord+'!';

    var image = document.querySelector('#wordImage');
    var playerpic = `assets/images/${lastWord}.jpg`;
    image.src = playerpic;
}

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    lastWord = word;
    newWord();
    goodjob();

  } else if (guesses === 0) {
    alert('You Lost. Try Again!');
    initializeGame();

    displayWins.innerHTML = winCount;
    displayWrong.innerHTML = wrongGuesses;
  }
}

initializeGame();

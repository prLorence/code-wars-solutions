let guessGame = parseInt(prompt('Enter your maximum number and guess the number form there!'));

while (!guessGame) {
  guessGame = parseInt(prompt('That\'s not a valid number! Enter a valid number'));
}

const val = Math.floor(Math.random() * guessGame + 1);

let guess = parseInt(prompt('Enter you guess number'));
let attemptCount = 1;

while (parseInt(guess) !== val) {

  if ( guess === 'q') break; 

  attemptCount++;

  if (guess > val) {
    guess = prompt('too high');
  } else {
    guess = prompt('too low');
  }

}

if (guess === 'q') {
  prompt('you quitted');
} else {
  prompt(`You got it! It took you ${attemptCount} attemptsgit  to arrive at that number.`)
}


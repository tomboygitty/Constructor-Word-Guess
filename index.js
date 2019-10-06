// Require Word constructor
var Word = require("./Word");

// Require Inquirer NPM
var inquirer = require("inquirer");

// Make array of words to be randomly guessed
var words = ['pineapple', 'toothbrush', 'Terminator', 'appliance', 'teacup', 'existence', 'vacation', 'Game of Thrones', 'largesse', 'robot', 'amulet', 'My Bloody Valentine', 'metal', 'Twin Peaks', 'Satoshi Kon'];

// Global counter for remaining guesses
var remainingGuesses;

// Make string for letters already guessed
var lettersGuessed = '';

// Function to start a new game
function newGame() {
    remainingGuesses = 10;
    lettersGuessed = [];
    var random = Math.floor(Math.random()*15);
    word = new Word(words[random]);
    word.display();
    input();
}

// Function that prompts the users input and responds accordingly
function input() {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function(answer) {
        if (answer.guess.length > 1||answer.guess.length == 0) {
            word.display();
            console.log("Please guess a single letter (A-Z) only.");
            input();
        }
        else {
            if (lettersGuessed.includes(answer.guess.toUpperCase())||lettersGuessed.includes(answer.guess.toLowerCase())) {
                word.display();
                console.log("That letter has already been guessed. Please use another letter.");
                input();
            }
            else {
                lettersGuessed += answer.guess;
                if (word.check(answer.guess)) {
                    if (word.guessed()) {
                        word.display();
                        console.log("CORRECT!!!\n\n");
                        win();
                    }
                    else {
                        word.display();
                        console.log("CORRECT!!!\n\n");
                        input();
                    }
                }
                else {
                    remainingGuesses--;
                    if (remainingGuesses == 0) {
                        lose();
                    }
                    else {
                        word.display();
                        console.log("INCORRECT!!!\n\n" + remainingGuesses + " guesses remaining!\n");
                        input();
                    }
                }
            }
        }
    });
}

// Function to end the game in a WIN condition and prompt the player for another game
function win() {
    inquirer.prompt([
        {  
            name: "win",
            message: "You won! Would you like to play again? (Y/N)"
        }
    ]).then(function(answer) {
        if (answer.win==='Y'||answer.win==='y') {
            newGame();
        }
        else if (answer.win!=='N'&&answer.win!=='n') {
            console.log("Please enter a proper response.")
            win();
        }
    });
}

// Function to end the game in a LOSE condition and prompt the player for another game
function lose() {
    inquirer.prompt([
        {  
            name: "lose",
            message: "No more guesses. You lose! Would you like to play again? (Y/N)"
        }
    ]).then(function(answer) {
        if (answer.lose==='Y'||answer.lose==='y') {
            newGame();
        }
        else if (answer.lose!=='N'&&answer.lose!=='n') {
            console.log("Please enter a proper response.")
            lose();
        }
    });
}

// Initial function call to start the game
newGame();
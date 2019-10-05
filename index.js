// Require Word constructor
var Word = require("./Word");

// Require Inquirer NPM
var inquirer = require("inquirer");

// Make array of words to be randomly guessed
var words = ['pineapple', 'toothbrush', 'Terminator', 'appliance', 'teacup', 'existence', 'vacation', 'Game of Thrones', 'largesse', 'robot', 'amulet', 'My Bloody Valentine', 'metal', 'Twin Peaks', 'Satoshi Kon'];

function newGame() {
    var random = Math.floor(Math.random()*15);
    var remainingGuesses = 10;
    word = new Word(words[random]);
    word.display();
    input();
}

function input() {
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
    ]).then(function(answer) {
        if (answer.length > 1) {
            console.log("Please guess a single letter (A-Z) only.")
        }
        else {
            if (word.check(answer.toUpperCase())||word.check(answer.toLowerCase())) {
                console.log("CORRECT!!!\n\n");
                word.display();
            }
            else {
                remainingGuesses--;
                if (remainingGuesses == 0) {
                    inquirer.prompt([
                        {  
                            name: "over",
                            message: "No more guesses. You lose! Would you like to play again? (Y/N)"
                        }
                    ]).then(function(answer) {

                    });
                }
                console.log("INCORRECT!!!\n\n" + remainingGuesses);
            }
            
            
        }
    });
}

newGame();
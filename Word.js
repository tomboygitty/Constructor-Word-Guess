// Require Letter constructor
var Letter = require("./Letter");

// Constructor that stores attributes of word to be guessed
function Word(word) {
    // Create an array with each inidividual letter of the word split up
    var letterArray = word.split('');
    this.word = [];
    for (i = 0; i < letterArray.length; i++) {
        var temp = new Letter(letterArray[i]);
        if (letterArray[i]===' ') {
            this.word.push(temp);
            this.word[i].guessed = true;
        }
        else {
            this.word.push(temp);
        }
    }
    // Function to return boolean TRUE if ALL characters in the word have been guessed
    this.guessed = function() {
        var flag = true;
        for (i = 0; i < this.word.length; i++) {
            if (!this.word[i].guessed) {
                flag = false;
            }
        }
        return flag;
    }
    // Function to display the word with previously guessed letters showing and underscore for non-guessed
    this.display = function() {
        var displayWord = '';
        for (i = 0; i < this.word.length; i++) {
            displayWord += this.word[i].display() + ' ';
        }
        console.log(displayWord + '\n\n');
    }
    // Function to check if a passed letter is a correct guess
    this.check = function(lett) {
        var flag = false;
        for (i = 0; i < this.word.length; i++) {
            if (this.word[i].check(lett.toUpperCase())||this.word[i].check(lett.toLowerCase())) {
                flag = true;
            }
        }
        return flag;
    }
}

// Export the constructor class so other files can import it
module.exports = Word;
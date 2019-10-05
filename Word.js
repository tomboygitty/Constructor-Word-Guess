// Require Letter constructor
var Letter = require("./Letter");

// Constructor that stores attributes of word to be guessed
function Word(word) {
    var letterArray = word.split('');
    this.word = [];
    for (i = 0; i < letterArray.length; i++) {
        var temp = new Letter(letterArray[i]);
        this.word.push(temp);
    }
    this.display = function() {
        var displayWord = '';
        for (i = 0; i < this.word.length; i++) {
            displayWord += this.word[i].display() + ' ';
        }
        console.log(displayWord + '\n\n');
    }
    this.check = function(lett) {
        var flag = false;
        for (i = 0; i < this.word.length; i++) {
            if (this.word[i].check(lett)) {
                flag = true;
            }
        }
        return flag;
    }
}

module.exports = Word;
// Constructor that stores attributes of letter to be guessed
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.display = function() {
        if (this.guessed) {
            return this.letter;
        }
        else return "_";
    }
    this.check = function(lett) {
        if (this.letter === lett) {
            this.guessed = true;
        }
        return this.guessed;
    }
}

module.exports = Letter;
// Constructor that stores attributes of letter to be guessed
function Letter(letter) {
    // Assign the passed letter to a stored value
    this.letter = letter;
    // By default, each letter is not guessed
    this.guessed = false;
    // Function that returns the value of the letter if it has already been guessed, or underscore if not
    this.display = function() {
        if (this.guessed) {
            return this.letter;
        }
        else return "_";
    }
    // Function to check if a passed letter equals this letter object and changes the guessed flag if it is
    this.check = function(lett) {
        if (this.letter === lett) {
            this.guessed = true;
            return true;
        }
        return false;
    }
}

// Export the constructor class so other files can import it
module.exports = Letter;
class Game {
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        // this.guess = guess;
        this.numberOfGuesses = 6;
        this.lettersInWord = 5;
        this.guessesRemaining = this.numberOfGuesses;
        
        
    }

    selectWord(){
        let selectedWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase().split('');
        
        this.word = selectedWord;
        console.log(this.word);
    }

    inputLetters(){
        let currentBox = 0;
        let guessedWord = [];
        document.addEventListener("keyup", (event) => {
    
            let letterInput = document.querySelector('#box-' + currentBox);
            currentBox++
            if(currentBox < 6 && event.code !== 'Enter'){
                letterInput.innerHTML = event.key;
                guessedWord.push(event.key);
                // console.log(guessedWord);
            } else {
                return false;
            }
            console.log(guessedWord);
            
        });
        
    }

    deleteLetter(){
        document.addEventListener("keyup", (event) => {
        if (event.code == "Backspace" && currentBox > 0) {
            let letterInput = document.querySelector('#box-' + currentBox);
            currentBox--
            letterInput.innerHTML = '';
        }
    });
    }

    checkWord(){
        document.addEventListener("keyup", (event) => {
            if(event.code === 'Enter'){
                console.log("Good Guess!");
            } 
        })
    }

    compareLetters(){
        
        if(this.guessedWord == 5){
            console.log("It's fucking working");
        }
    }

    
}

const game2 = new Game(wordsArray);



game2.selectWord();
game2.inputLetters();
game2.deleteLetter();
game2.checkWord();
game2.compareLetters();
// game2.compareLetters();
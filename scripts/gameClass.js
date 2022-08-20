class Game {
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        this.guess = '';
        this.numberOfGuesses = 6;
        this.lettersInWord = 5;
        this.guessesRemaining = this.numberOfGuesses;
        this.currentBox = 0;
        this.currentRow = 0;
        this.guessedWord = [];
    }

    selectWord(){
        let selectedWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase().split('');
        this.word = selectedWord;
        console.log(this.word);
    }

    checkWord(){
        document.addEventListener("keyup", (event) => { 
            if(event.code == 'Enter' && this.guess.length == 5){
                console.log('Valid Word!');
                
            } 
        });
    }

    compareLetters(){
        
        if(this.guess.length == 5){
            console.log("It's fucking working");
        }
    }

    
}

const game2 = new Game(wordsArray);



game2.selectWord();
game2.checkWord();
game2.compareLetters();
class Game {
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        this.numberOfGuesses = 6;
        this.lettersInWord = 5;
        this.guessesRemaining = this.numberOfGuesses;
        
        
    }

    selectWord(){
        let selectedWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase().split('');
        
        this.word = selectedWord;
        console.log(this.word);
    }

    

    // compareLetters(word){
    //     document.addEventListener("keyup", (event) => {
    //         let firstBox = document.querySelector('.inputBoxes:first-child');
    //         firstBox.innerHTML = event.key;
    //         for(let i = 0; i < 5; i++){
    //             let currentGuess = event.key;
    //             let correctLetter = this.selectedWord[i];
    //             if(currentGuess === correctLetter){
                    
    //                 console.log('True');
    //             } else {
    //                 console.log('false');
    //             }
    //         }
            
                
    //         });
    // }

    checkWord(){
        
    }
}

const game2 = new Game(wordsArray);


game2.selectWord();
// game2.compareLetters();
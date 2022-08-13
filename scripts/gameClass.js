class Game {
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        this.numberOfGuesses = 6;
        this.lettersInWord = 5;
        this.guessesRemaining = this.numberOfGuesses;
        
        
    }
    createBoard(){
        let board = document.getElementById('gameBoard');
        for(let i = 0; i < this.numberOfGuesses; i++) {
            let row = document.createElement('div');
            row.className = `row row-${i}`;
    
            for(let j = 0; j < 5; j++){
                let box = document.createElement('div');
                box.className = 'inputBoxes';

                row.appendChild(box);
            }
            board.appendChild(row);
        }
    }
    
    
    
    selectWord(){
        this.selectedWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase().split('');
        console.log(selectedWord);
    }

    compareLetters(){
        document.addEventListener("keyup", (event) => {
            let firstBox = document.querySelector('.inputBoxes:first-child');
            firstBox.innerHTML = event.key;
            for(let i = 0; i < this.selectedWord.length; i++){
                let currentGuess = event.key;
                let correctLetter = this.selectedWord[i];
                if(currentGuess === correctLetter){
                    
                    console.log('True');
                } else {
                    console.log('false');
                }
            }
            
                
            });
    }

    checkWord(){
        
    }
}

const game2 = new Game(wordsArray);

game2.createBoard();
// game2.compareLetters(wordsArray);
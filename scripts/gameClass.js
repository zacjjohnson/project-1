class Game{
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        this.guess = '';
        this.numberOfGuesses = 6;
        this.lettersInWord = this.word.length;
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

    inputLetters(){
        document.addEventListener("keyup", (event) => {
            let letterInput = document.querySelector('#box-' + this.currentBox);
            
            
            if(this.currentBox <= 5 && event.code !== 'Enter' && event.code !== 'Backspace'){
                    this.currentBox++
                    letterInput.innerHTML = event.key;
                    letterInput.classList.add("addedLetters");
                    this.guessedWord.push(event.key);
                    this.guess = this.guessedWord;
                } else {
                    return false;
            }     
        }); 
    }

    keyboard(){
        document.addEventListener("keyup", (event) => {

            if (event.code == "Backspace") {
                this.deleteLetter();
            }

            if(event.code == 'Enter'){
                this.checkWord();
            }

            
               
        });
    }

    deleteLetter(){

        this.currentBox--;
        this.guess.pop();
        console.log(this.guess);
        console.log(this.currentBox);
        let letterInput = document.querySelector('#box-' + this.currentBox);
        letterInput.innerHTML = '';
        letterInput.classList.remove('addedLetters');
        
    }

    // checkWord(){    
    //         this.currentRow++;
    //         this.inputLetters();
    //         this.guess = this.guessedWord;
    //         console.log(this.guess);  
    // }

    // compareLetters(){
    //     if(this.guessedWord = this.word){
            
    //     }
        
    // }

    
}

const game2 = new Game(wordsArray);



game2.selectWord();
game2.keyboard();
game2.inputLetters();

``
// game2.compareLetters();
class Game{
    constructor(wordArray){
        this.wordArray = wordArray;
        this.word = '';
        this.guess = '';
        this.numberOfGuesses = 6;
        this.guessesRemaining = this.numberOfGuesses;
        this.nextLetter = 0;
        this.guessedWord = [];
        this.newLine = false;
    }
    selectWord(){
        let selectedWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)].toLowerCase().split('');
        this.word = selectedWord;
        
    }

    keyboard(){
        document.addEventListener("keyup", (event) => {
            let pressedKey = event.key;
            if (pressedKey == "Backspace") {
                this.deleteLetter();
                
            }
            if(this.nextLetter == 5 && pressedKey == 'Enter'){
                this.checkWord();
                
            }     
        });

        document.getElementById('keyboard').addEventListener('click', (e) => {
            const target = e.target
            
            if (!target.classList.contains("keyboard-button")) {
                return
            }
            let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
            let box = row.children[this.nextLetter];
             let key = target.textContent

            if (key === "Del") {
                key = "Backspace"
            } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
        });
    }

    inputLetters(event){

        document.addEventListener("keyup", (event) => {
            if (this.nextLetter === 5) {
                return
            }
            let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
            let box = row.children[this.nextLetter];
            
            let pressedKey = event.key;
            
            if(this.newLine) {
                this.guessedWord = [];
                this.newLine = false;
            }
            
            if(this.nextLetter <= 5 && pressedKey !== 'Enter' && pressedKey !== 'Backspace'){
                    this.nextLetter++
                    box.textContent = pressedKey
                    box.classList.add("addedLetters");
                    this.guessedWord.push(pressedKey);
                    this.guess = this.guessedWord;
             } 
        }); 
    };

    
        
    deleteLetter(){
        
        let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
        let box = row.children[this.nextLetter - 1]
        box.textContent = ""
        box.classList.remove('addedLetters');
        this.guess.pop();
        this.nextLetter--;
    }

    checkWord(){

        let row = document.getElementsByClassName("letter-row")[6 - this.guessesRemaining]
        let guessString = ''
        let rightGuess = this.word;
    
        for (const val of this.guess) {
            guessString += val
        }
        
        for (let i = 0; i < 5; i++) {
            let letterColor = ''
            let box = row.children[i]
            let letter = this.guess[i]
            
            let letterPosition = rightGuess.indexOf(this.guess[i])

            
            // is letter in the correct guess
            if (letterPosition === -1) {
                letterColor = 'grey'
            } else {
               
                if (letter === rightGuess[i]) {
                    // shade green 
                    letterColor = 'green'
                } else {
                    // shade box yellow
                    letterColor = 'yellow'
                }
    
                // rightGuess[letterPosition] = "#"
            }
    
            let delay = 250 * i
            setTimeout(()=> {
                //shade box
                box.style.backgroundColor = letterColor
                
            }, delay)
        }

        

    
        if (guessString === rightGuess.join('')) {
            setTimeout(() => alert("You Win!"), 1000)            
            this.guessesRemaining = 0
            return
        } else {
            this.guessesRemaining -= 1;
            this.newLine = true;
            this.guess = [];
            this.nextLetter = 0;
    
            if (this.guessesRemaining === 0) {
                alert("Game over!")
                alert(`The right word was: "${this.word.join('')}"`)
            }
        }   
    }


    
}


const game2 = new Game(wordsArray);



game2.selectWord();
game2.keyboard();
game2.inputLetters();

``
// game2.compareLetters();
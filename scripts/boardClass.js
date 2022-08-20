class Board extends Game{
    constructor(wordArray){

        super(wordArray);
    }

    createBoard(){
        let board = document.getElementById('gameBoard');
        for(let i = 0; i < this.numberOfGuesses; i++) {
            let row = document.createElement('div');
            row.className = `row row-${i}`;
    
            for(let j = 0; j < 5; j++){
                let box = document.createElement('div');
                box.className = `inputBoxes`;
                box.setAttribute('id', `box-${j}`);
                box.setAttribute('maxLength', 1);
                row.appendChild(box);
            }
            board.appendChild(row);
        }
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

    deleteLetter(){
        document.addEventListener("keyup", (event) => {
            if (event.code == "Backspace") {  
                this.currentBox--;
                this.guess.pop();
                console.log(this.guess);
                console.log(this.currentBox);
                let letterInput = document.querySelector('#box-' + this.currentBox);
                letterInput.innerHTML = '';
                letterInput.classList.remove('addedLetters');
            } 
        });
    }


}

let gameBoard = new Board();
gameBoard.createBoard();
gameBoard.inputLetters();
gameBoard.deleteLetter();
class Board extends Game{
    constructor(word){

        super(word);
    }

    createBoard(){
        let board = document.getElementById('gameBoard');
        for(let i = 0; i < this.numberOfGuesses; i++) {
            let row = document.createElement('div');
            row.className = `row row-${i}`;
    
            for(let j = 0; j < 5; j++){
                let box = document.createElement('div');
                box.className = `inputBoxes box`;

                row.appendChild(box);
            }
            board.appendChild(row);
        }
    }

    keyboard(){
        document.addEventListener("keyup", (e) => {

            if (guessesRemaining === 0) {
                return
            }
        
            let pressedKey = String(e.key)
            if (pressedKey === "Backspace" && nextLetter !== 0) {
                deleteLetter()
                return
            }
        
            if (pressedKey === "Enter") {
                checkGuess()
                return
            }
        
            let found = pressedKey.match(/[a-z]/gi)
            if (!found || found.length > 1) {
                return
            } else {
                inputLetters(pressedKey)
            }
        })
    }
    inputLetters(){
        if (nextLetter === 5) {
            return
        }
        pressedKey = pressedKey.toLowerCase()
    
        let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
        let box = row.children[nextLetter]
        box.textContent = pressedKey
        box.classList.add("filled-box")
        currentGuess.push(pressedKey)
        nextLetter += 1
    };
}

let gameBoard = new Board();
gameBoard.createBoard();
gameBoard.inputLetters();
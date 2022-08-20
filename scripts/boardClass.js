class Board extends Game{
    constructor(wordArray){
        super(wordArray)
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

    


}

let gameBoard = new Board();
gameBoard.createBoard();
// gameBoard.inputLetters();
// gameBoard.deleteLetter();
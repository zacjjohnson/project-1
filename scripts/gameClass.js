class Game {
    constructor(word){
        this.word = word;
        this.numberOfGuesses = 6;
        this.lettersInWord = 5;
        
    }
    createBoard(){
        let board = document.getElementById('gameBoard');
        for(let i = 0; i < this.numberOfGuesses; i++) {
            let row = document.createElement('div');
            row.className = 'row';
    
            for(let j = 0; j < 5; j++){
                let box = document.createElement('div');
                box.className = 'inputBoxes';
                row.appendChild(box);
            }
            board.appendChild(row);
        }
    }
    
    
    
    selectWord(){
        let randomIndex = Math.floor(Math.random() * arr.length);

        return randomIndex;
    }

    splitWord(){
        
    }

    compareLetters(){

    }

}

const game2 = new Game;

game2.createBoard()
game2.splitWord(wordsArray[2]);
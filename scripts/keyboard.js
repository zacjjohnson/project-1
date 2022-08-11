function createBoard(){
    let board = document.getElementById('gameBoard');
    for(let i = 0; i < Game.numberOfGuesses; i++) {
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

createBoard()
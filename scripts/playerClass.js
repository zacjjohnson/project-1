class Player {
    
    winningGuess(){
        if(game2.numberOfGuesses === 7){
            return "You win!";
        }
    }

    losingGuess(){
        if(game2.numberOfGuesses === 7){
            return "You lose!";
        }
    }
}



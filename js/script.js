function playGame(playerInput){
    clearMessages();

    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
    computerMove = 'Kamień';
    }
    if(randomNumber == 2){
    computerMove = 'Papier';
    }
    if(randomNumber == 3){
    computerMove = 'Nożyce';
    }
    */
    printMessage('Mój ruch to: ' + computerMove);

    
/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    /*
    if(playerInput == '1'){
    playerMove = 'Kamień';
    }
    if(playerInput == '2'){
        playerMove = 'Papier';
    }
    if(playerInput == '3'){
        playerMove = 'Nożyce';
    }
    */
    printMessage('Twój ruch to: ' + playerMove);

    /*if( computerMove == 'Kamień' && playerMove == 'Papier'){
        printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'Kamień' && playerMove == 'Nożyce'){
        printMessage('Komputer wygrywa!');
    }
    if( computerMove == 'Kamień' && playerMove == 'Kamień'){
        printMessage('Mamy remis!');
    }
    if( computerMove == 'Papier' && playerMove == 'Nożyce'){
        printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'Papier' && playerMove == 'Kamień'){
        printMessage('Komputer wygrywa!');
    }
    if( computerMove == 'Papier' && playerMove == 'Papier'){
        printMessage('Mamy remis!');
    }
    if( computerMove == 'Nożyce' && playerMove == 'Papier'){
        printMessage('Komputer wygrywa!');
    }
    if( computerMove == 'Nożyce' && playerMove == 'Kamień'){
        printMessage('Ty wygrywasz!');
    }
    if( computerMove == 'Nożyce' && playerMove == 'Nożyce'){
        printMessage('Mamy remis!');
    }*/
    displayResult (computerMove, playerMove);


    if(playerInput !='1' && playerInput !='2' && playerInput !='3' ){
        printMessage ('Niewłaściwy ruch!')
    }
}
   
    document.getElementById('play-rock').addEventListener('click', function(){
       console.log('dupa') 
       playGame('1');
    });
    
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame('2');
    });
    
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame('3');
    });
    

 
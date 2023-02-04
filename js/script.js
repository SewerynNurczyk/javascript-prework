let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'kamień';

if(randomNumber == 1){
  computerMove = 'Kamień';
}
if(randomNumber == 2){
  computerMove = 'Papier';
}
if(randomNumber == 3){
  computerMove = 'Nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'Kamień';
}
if(playerInput == '2'){
    playerMove = 'Papier';
}
if(playerInput == '3'){
    playerMove = 'Nożyce';
}
printMessage('Twój ruch to: ' + playerMove);
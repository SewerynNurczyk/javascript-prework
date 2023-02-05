function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'Kamień';
	}
	if(argMoveId == 2){
		return 'Papier';
	}
	if(argMoveId == 3){
		return 'Nożyce';
	}
}
	function displayResult (argComputerMove,argPlayerMove){
		if (argComputerMove == argPlayerMove) {
			printMessage('Remis');
			if( computerMove == 'Kamień' && playerMove == 'Papier'){
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
			}
			
			if(playerInput !='1' && playerInput !='2' && playerInput !='3' ){
				printMessage ('Niewłaściwy ruch!')
			}		
	}
	}
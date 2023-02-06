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
			if (argComputerMove === argPlayerMove) {
				printMessage('Remis');
			}
			if( argComputerMove === 'Kamień' && argPlayerMove === 'Papier'){
				printMessage('Ty wygrywasz!');
			}
			if( argComputerMove === 'Kamień' && argPlayerMove === 'Nożyce'){
				printMessage('Komputer wygrywa!');
			}
			if( argComputerMove === 'Papier' && argPlayerMove === 'Nożyce'){
				printMessage('Ty wygrywasz!');
			}
			if( argComputerMove === 'Papier' && argPlayerMove === 'Kamień'){
				printMessage('Komputer wygrywa!');
			}
			if( argComputerMove === 'Nożyce' && argPlayerMove === 'Papier'){
				printMessage('Komputer wygrywa!');
			}
			if( argComputerMove === 'Nożyce' && argPlayerMove === 'Kamień'){
				printMessage('Ty wygrywasz!');
			}
			if(playerInput !='1' && playerInput !='2' && playerInput !='3' ){
				printMessage ('Niewłaściwy ruch!')
			}		
	}

function playGame(playerInput){

}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
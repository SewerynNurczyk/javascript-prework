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

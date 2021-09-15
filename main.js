const socket = io();

socket.on('temp', function(data){
	console.log(data);
	let mostrar = document.getElementById('datos');
	mostrar.innerHTML = `${data}`;
});


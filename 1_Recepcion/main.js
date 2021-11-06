const socket = io();

// Escucha el evento temp y escribe en el documeto
socket.on('temp', function(data){
	console.log(data);
	let mostrar = document.getElementById('datos');
	mostrar.innerHTML = `${data}`;
});


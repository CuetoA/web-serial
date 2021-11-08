//const socket = io("http://localhost:8080");
const socket = io();
const boton = document.getElementById("button")


// Función de envío
function enviarDatos(valor) {
	console.log('Enviando: ', valor);
	socket.emit('saludo', valor )
};


boton.addEventListener('click', () => {
	enviarDatos('CMD0002 1,5,199,0,0,2,3,4,4,5\r\n');
})

socket.on("an_event", (data) => {
	console.log(data);
	socket.emit("hi_back", "hola de vuelta");
});


// Escucha el evento temp y escribe en el documeto
socket.on('temp', function(data){
	console.log(data);
	let mostrar = document.getElementById('datos');
	mostrar.innerHTML = `${data}`;
});

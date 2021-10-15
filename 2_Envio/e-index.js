// const socket = io();
const socket = io("http://localhost:8080");
// Constantes para prender led
const prender = document.getElementById("on-button")
const apagar = document.getElementById("off-button")


// Comportamiento de botones
prender.addEventListener('click', () => {
	enviarDatos('1');
})

apagar.addEventListener('click', () => {
	enviarDatos('0');
})

socket.on("an_event", (data) => {
	console.log(data);
	socket.emit("hi_back", "hola de vuelta");
});

// Función de envío
function enviarDatos(valor) {
	console.log('prueba prueba');
	console.log('se envió un: ', valor);
	console.log('');
	console.log(socket)
	// Si es un 1
	if (valor === "1") {
		// emitir un evento de encendido
		socket.emit('encender', valor);
		console.log('enceder');
		// Si es un  0
	} else {
		// emitir un evento de apagado
		socket.emit('apagar', valor);
		console.log('apagar');
	}
}
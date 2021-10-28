//const socket = io("http://localhost:8080");
const socket = io();
const prender = document.getElementById("on-button")
const apagar = document.getElementById("off-button")


// Función de envío
function enviarDatos(valor) {
	console.log('Enviando dato: ', valor);
	console.log();

	if (valor === "1") {
		socket.emit('encender', valor);
	} else {
		socket.emit('apagar', valor);
	}
}


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


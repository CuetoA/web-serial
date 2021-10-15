// Constantes para prender led
const prender =     document.getElementById("on-button")
const apagar =      document.getElementById("off-button")


// Comportamiento de botones
prender.addEventListener('click', () => {
    enviarDatos('1');
})

apagar.addEventListener('click', () => {
    enviarDatos('0');
})


// Función de envío
function enviarDatos(valor){
	console.log('prueba prueba');
	console.log('se envió un: ', valor);
	console.log('');

	const socket = io();

	socket.on('ebutton', function(data){
		console.log(data);
		let mostrar = document.getElementById('datos');
		mostrar.innerHTML = `${data}`;
	});



}
// Constantes apra inicial servidor
//const http = require('http')
//const express = require('express');
//const app = express();
//const server = http.createServer(app);
//var io = require('socket.io')(server);


// Constantes para prender led
const prender =     document.getElementById("on-button")
const apagar =      document.getElementById("off-button")


// Instalando servidor
//app.use(express.static(__dirname + '/')); // Main path
//server.listen(8080,() => { 
//	console.log('Server lsitening on http://localhost:8080') 
//});


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
	console.log('')
}


//Llamado a la página
//app.get('/', function(req, res){ res.sendFile(__dirname + 'index.html') });
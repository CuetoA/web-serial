// Constantes apra inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

// Constantes para abrir el puerto serial
const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM3', { baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768 });
const parser = port.pipe(new Readline());

function enviarDatos(valor) {
	console.log('Serie - Enviando dato: ', valor)
	port.write(valor);
	console.log("Hola Valkyria :3");
}


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Server lsitening on http://localhost:8080')
});


// socket está escuchando
io.on("connection", (socket) => {
	console.log("connected to the socket!");

	socket.on('saludo', (valor) =>{
		console.log("Hola Andres");
		enviarDatos(valor);
	});
});

// Emite evento temp cuando escucha evento data
parser.on('data', function(data){
	console.log("Hola Marco");
	data = data.toString();
	console.log("Hola May");
	console.log("Aquí estoy-",data);
	io.emit('temp', data);
});



//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/er-index.html') });


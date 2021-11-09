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
	port.write('CMD0002 1,5,199,0,0,8,8,4,4,5\r\n');
	//port.write('\r');
	//port.write(valor);
}


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Server lsitening on http://localhost:8080')
});


// socket está escuchando
io.on("connection", (socket) => {
	console.log("connected to the socket!");

	// Eventos que detonarán el envío
	socket.on('encender', (valor) => {
		enviarDatos(valor);
	});

	socket.on('apagar', (valor) => {
		enviarDatos(valor);
	});
});


// Emite evento temp cuando escucha evento data
parser.on('data', function(data){
	data = data.toString();
	console.log('Se está recibiendo: ',data);
});


//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/e-index.html') });


// Constantes apra inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

// Constantes para abrir el puerto serial
const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM6', { baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768 });
const parser = port.pipe(new Readline());

function apagarLED(valor) {
	console.log("apagar", valor);
}


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Server lsitening on http://localhost:8080')
});


// socket está escuchando
io.on("connection", (socket) => {
	console.log("connected!");
	socket.emit("an_event", { some: "data" });

	socket.on("hi_back", (message) => console.log(message));

	socket.on('encender', (valor) => {
		console.log("encender pp: ", valor);
		port.write('1');
	});

	socket.on('apagar', (valor) => {
		apagarLED(valor);
		console.log('apagar pp;', valor)
		port.write('0');
	});
});
io.on("hi_back", (message) => console.log(message));

//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/e-index.html') });


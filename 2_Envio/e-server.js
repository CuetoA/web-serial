// Constantes apra inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);

// Constantes para iniciar el socket
const io = require('socket.io')(server);

// Constantes para abrir el puerto serial
const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM7', { baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768 });
const parser = port.pipe(new Readline());

function apagarLED(valor) {
	console.log("apagar", valor);
}


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080, () => {
	console.log('Server lsitening on http://localhost:8080')
});

io.on("connection", (socket) => {
	console.log("connected!");
	socket.emit("an_event", { some: "data" });

	socket.on("hi_back", (message) => console.log(message));

	socket.on('encender', (valor) => {
		console.log("encender: ", valor);
	});

	socket.on('apagar', (valor) => {
		apagarLED(valor);
	});
});
io.on("hi_back", (message) => console.log(message));


// Escuchando el puerto serie
// parser.on('data', (line) => {
// 	console.log('Saludando al arduino: ' + line);
// 	console.log('');
// 	port.write('1');
// });


// document.querySelector('button').onclick = () =>{
// 	socket.send('hello');
// };

//Llamado a la página
app.get('/', function (req, res) { res.sendFile(__dirname + '/e-index.html') });


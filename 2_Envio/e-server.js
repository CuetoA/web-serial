// Constantes apra inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);
var io = require('socket.io')(server);

// Constantes para iniciar el socket
const SocketIO = require('socket.io');
var io = require('socket.io')(server);

// Constantes para abrir el puerto serial
const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM6',{baudRate: 9600, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768});
const parser = port.pipe(new Readline());




// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080,() => { 
	console.log('Server lsitening on http://localhost:8080') 
});

// Escuchando el puerto serie
parser.on('data', function(){
		console.log('Abrimos la conexión con serial');
		console.log('');
		port.write('1');
});


//Llamado a la página
app.get('/', function(req, res){ res.sendFile(__dirname + '/e-index.html') });
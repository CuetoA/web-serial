// Constantes para inicial servidor
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
const port = new Serialport('COM6',{baudRate: 115200, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768});
const parser = port.pipe(new Readline());

// estableciendo el puerto 8080
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080,() => { 
	console.log('Server lsitening on http://localhost:8080') 
});

// Escuchamos cuando se abre el pipe
parser.on('open', function() {
	console.log('connection is opened');
});

// Emite evento temp cuando escucha evento data
parser.on('data', function(data){
	console.log(data);
	io.emit('temp', data);
});


// Lo que pasa si escucha un error
port.on('error', function(err){
	console.log(err);
});

//Esto se debe quedar al final
app.get('/', function(req, res){ res.sendFile(__dirname + 'index.html') });
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;


app.use(express.static(__dirname + '/')); // Main path

app.get('/', function(req, res){ res.sendFile(__dirname + 'index.html') });

server.listen(8080,() => { console.log('Server lsitening on http://localhost:8080') });


var sp = new serialport('COM6',{baudRate: 115200, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768});


var texto = 'Hola cliente... soy servidor'

io.on('connection', function(socket){
	console.log("New connection is detected...");
	var connectedUsersCount = io.engine.clientsCount;
	console.log("Number of users connected: " + connectedUsersCount);

	socket.emit("cadena 1", texto);



	sp.on('data', function(data){
		console.log('data serial recived: ' + data);

		datosSP = data;

		socket.emit('llegaDeSerial', {text: datosSP});
	});

}); //sockets io

const http = require('http')
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
var io = require('socket.io')(server);

const Serialport = require("serialport");
const Readline = Serialport.parsers.Readline;
const port = new Serialport('COM6',{baudRate: 115200, databits: 8, parity: 'none', stopbits: 1, flowControl: false, buffersize: 32768});
const parser = port.pipe(new Readline());

app.get('/', function(req, res){ res.sendFile(__dirname + 'index.html') });
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080,() => { 
	console.log('Server lsitening on http://localhost:8080') 
});


parser.on('open', function() {
	console.log('connection is opened');
});

parser.on('data', function(data){
	console.log(data);
	io.emit('temp', data);
});

port.on('error', function(err){
	console.log(err);
});
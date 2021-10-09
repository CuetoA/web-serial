// Constantes apra inicial servidor
const http = require('http')
const express = require('express');
const app = express();
const server = http.createServer(app);
var io = require('socket.io')(server);


// Instalando servidor
app.use(express.static(__dirname + '/')); // Main path
server.listen(8080,() => { 
	console.log('Server lsitening on http://localhost:8080') 
});


//Llamado a la página
app.get('/', function(req, res){ res.sendFile(__dirname + 'index.html') });
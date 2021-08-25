var socket = io.connect('http://localhost:8080', {'forceNew': true});

socket.on("cadena1", function(data){
console.log("Lo que llegó del servidor es: " + data);
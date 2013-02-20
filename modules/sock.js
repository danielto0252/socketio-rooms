var app = require('express')(), 
	express = require('express'),
	path = require('path'),
	server = require('http').createServer(app);;


exports.createSocket = function(app, io) {
	
	io.sockets.on('connection', function(socket) {
		// something on connect
		socket.on('send_data', function(data) {
			console.log(data.text);
			console.log(data.room);
			socket.join(data.room);
			socket.broadcast.to(data.room).emit('receive', { message : data.text });
			
		});

		socket.on('join', function(data) {
			
			if(socket.room)
				socket.leave(socket.room);
			socket.room = data.room;
			socket.join(socket.room);
		});
	});


}
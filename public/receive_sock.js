$(document).ready(function() {
	var socket = io.connect('http://localhost')
	
	$("#join_room").click(function() {
		socket.emit('join', { room : $("#room").val()});
	});
	
	socket.on('receive', function(msg) {
		$("#text_yo").append(msg.message + '\n');
	});

});
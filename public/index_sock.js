$(document).ready(function() {
	var socket = io.connect('http://localhost')
	$("#send_shit").click(function() {
		socket.emit('send_data', { text : $("#text_yo").val(),
			room : $("#room_number").val() });
	});
});
var app = require('express')(), 
	express = require('express'),
	path = require('path'),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	sock = require('./modules/sock');

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser('the-secret-is-at-klines'));
  app.use(express.session());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'modules')));
});

sock.createSocket(app, io); 

app.get('/', function(request, response) {
	response.render('index.jade');
});

app.get('/receive', function(request, response) {
	response.render('receiver.jade');
});

server.listen(8000);

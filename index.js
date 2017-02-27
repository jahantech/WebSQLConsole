
const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    	host: 'localhost', 
    	port: 8000 
});

server.route({
	method: 'GET',
        path:'/runSQL', 
        handler: function (request, reply) {
		return reply('Running SQL');
        }
});


server.start((err) => {
	if (err) {
		throw err;
        }
	console.log('Server running at:', server.info.uri);
});

const http = required('http');
const hostname = '127.0.0.1';
const port = 12107;

const server = http.createServer(
	(request,response) => {
		response.statusCode = 200;
		response.setHeader('Content-Type','text/plain');
		response.end('Salut cono , tu boit un pastis ?');	
	}
);

server.listen(port,hostname,function() {
console.log('le serveur ecoute là bas :' + hostname + " : " + port );
});

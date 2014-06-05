var n = 0;
var http = require('http');
var app = http.createServer(function(req,res){
	if (++n > 4) { a }
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('result:' +n);
}).listen(3030);
console.log('Sever running');

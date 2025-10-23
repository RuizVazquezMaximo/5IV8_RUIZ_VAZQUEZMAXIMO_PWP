var http = require('http');
//vamos a crear nuestrro propio servidor 
var servidor = http.createServer(function (req,res){
    res.writeHead(200,{'content-type ': 'text/html; charset=ust-8'})
        response.write('<h1>Hola mundo desde node');
        console.log('si entre')
});

servidor.listen(3000);

console.log('servidore ejecutandose en http://localhost:3000')
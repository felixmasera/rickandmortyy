const http = require('http');
const  getCharById  = require('./controllers/getCharById.js');

const PORT = 3001

http.createServer((req, res) => {
    console.log(`Escuchando en el server ${PORT}`);

    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        let id = req.url.split('/').pop();
        getCharById(res, id)

    }
    else {
        res
            .writeHead(404, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: 'Wrong URL' }))
    }
}).listen(PORT, '127.0.0.1',
    () => (console.log(`Server listenin on port ${PORT}`))
)

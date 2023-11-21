const Gun = require('gun');
const http = require('http');

const server = http.createServer();
const gun = new Gun({ web: server });

server.listen(8765);

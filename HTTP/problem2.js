const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/data') {
    fs.readFile('data.txt', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error: File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(4500, () => {
  console.log('Server running at http://localhost:4500');
});

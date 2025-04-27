const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Us');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

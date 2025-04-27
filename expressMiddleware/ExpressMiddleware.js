const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  const fullPath = path.join(process.cwd(), pathname);

  fs.stat(fullPath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      fs.readdir(fullPath, { withFileTypes: true }, (err, files) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Server Error');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>Directory Listing</title></head><body>');
        res.write(`<h2>Index of ${pathname}</h2><ul>`);

        if (pathname !== '/') {
          res.write(`<li><a href="${path.join(pathname, '..')}">..</a></li>`);
        }

        files.forEach(file => {
          const slash = file.isDirectory() ? '/' : '';
          res.write(`<li><a href="${path.join(pathname, file.name)}${slash}">${file.name}${slash}</a></li>`);
        });

        res.write('</ul></body></html>');
        res.end();
      });
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.txt': 'text/plain',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif'
      };

      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(fullPath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('500 Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = server;

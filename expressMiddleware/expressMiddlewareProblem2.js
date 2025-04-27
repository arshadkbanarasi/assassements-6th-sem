const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = decodeURIComponent(parsedUrl.pathname);
  const localPath = path.join(process.cwd(), pathname);

  fs.stat(localPath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`<h1>404 Not Found</h1><p>The path ${pathname} does not exist.</p>`);
      return;
    }

    if (stats.isDirectory()) {
      fs.readdir(localPath, { withFileTypes: true }, (err, items) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('<h1>500 Internal Server Error</h1><p>Unable to read directory.</p>');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
          <html>
            <head>
              <title>Index of ${pathname}</title>
              <style>
                body { font-family: sans-serif; padding: 20px; }
                ul { list-style: none; padding: 0; }
                li { margin: 5px 0; }
                a { text-decoration: none; color: #0077cc; }
              </style>
            </head>
            <body>
              <h2>Index of ${pathname}</h2>
              <ul>
        `);

        if (pathname !== '/') {
          const parentPath = path.normalize(path.join(pathname, '..')).replace(/\\/g, '/');
          res.write(`<li>📁 <a href="${parentPath}">..</a></li>`);
        }

        items.forEach(item => {
          const isDir = item.isDirectory();
          const icon = isDir ? '📁' : '🖹';
          const itemPath = path.join(pathname, item.name).replace(/\\/g, '/');
          const displayPath = isDir ? itemPath + '/' : itemPath;
          res.write(`<li>${icon} <a href="${displayPath}">${item.name}</a></li>`);
        });

        res.end('</ul></body></html>');
      });
    } else {
      const ext = path.extname(localPath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.txt': 'text/plain',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
      };

      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(localPath, (err, content) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.end('<h1>500 Internal Server Error</h1><p>Error reading file.</p>');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

module.exports = server;

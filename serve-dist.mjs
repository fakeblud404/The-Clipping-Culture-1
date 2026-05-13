import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist');
const port = Number(process.env.PORT || 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    const target = normalize(join(root, pathname));
    const file = target.startsWith(root) ? target : join(root, 'index.html');
    const data = await readFile(file).catch(() => readFile(join(root, 'index.html')));
    response.writeHead(200, {
      'Content-Type': types[extname(file)] || 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    });
    response.end(data);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(error.message);
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Serving dist at http://localhost:${port}/`);
});

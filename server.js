const http = require('http');

const port = parseInt(process.env.PORT, 10) || 8080;

const server = http.createServer((req, res) => {
  const memMB = Math.round(process.memoryUsage().rss / 1024 / 1024);
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    status: 'ok',
    port,
    memoryRSS_MB: memMB,
    uptimeSec: Math.round(process.uptime()),
    envKeys: Object.keys(process.env)
  }, null, 2));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Probe listening on 0.0.0.0:${port}`);
});

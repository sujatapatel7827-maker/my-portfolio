const http = require('http');
const port = 5001;
const server = http.createServer((req, res) => {
    res.end('OK');
});
server.listen(port, () => {
    console.log(`Test server listening on ${port}`);
    process.exit(0);
});
server.on('error', (err) => {
    console.error('Test server error:', err.message);
    process.exit(1);
});

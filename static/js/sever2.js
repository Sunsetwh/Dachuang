const http = require('http');
const fs = require('fs');

const PORT = 3000;
const FILE_PATH = '../audio.json';

fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
  if (err) throw err;

  const jsonData = JSON.parse(data);

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(jsonData));
    res.end();
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
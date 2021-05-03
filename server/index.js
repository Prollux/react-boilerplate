const express = require('express');
const path = require('path');
const port = 3080;
const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, '../public')));

server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
});

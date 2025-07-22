'use strict';

const express = require('express');
const path = require('path');
const publicDirPath = path.join(__dirname, '.../app');

//constants
const Port = 8000;
const Host = '0.0.0.0';

//App
const app = express();
app.use(express.static(publicDirPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirPath, 'index.html'));
})
app.listen(Port, Host, () => {
  console.log(`Server is running on http://${Host}:${Port}`);
});
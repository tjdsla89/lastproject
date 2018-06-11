const express = require('express');
const app = express();

// index.html
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.listen(3000);
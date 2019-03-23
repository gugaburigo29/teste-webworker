const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

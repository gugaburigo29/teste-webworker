const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('./static'))

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(8080)

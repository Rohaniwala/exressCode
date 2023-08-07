const express = require('express');

var app = express();


app.get('/', (req, res) => {
    res.write("hello Express");
    res.end();
})

app.get('/hello', (req, res, next) => {
    res.write("hello abcd");
    next();
})

app.get('/hello1', (req, res) => {
    res.write("hello xyz");
    res.end();
})

app.use((req, res) => {
    res.end();
})

app.listen(8000);
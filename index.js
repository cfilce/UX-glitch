const express = require('express');
var fs = require('fs');
const app = express();
const port = 3000;

app.get('/like_button.js', function(req, res) {
    fs.readFile('./like_button.js', 'utf8', function(err, contents) {
        res.send(contents);
    });
});

app.get('/', function(req, res) {
    fs.readFile('./index.html', 'utf8', function(err, contents) {
        res.send(contents);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


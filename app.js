console.time('Server ON Time');
const express = require('express');
const fs = require('fs');

const app = express();

app.use('/static', express.static('static'));

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/view/index.html', 'utf8', function(err, data) {
        if(err) {
            res.statusCode = 404;
            res.send('수민이가 알려준다 여기 주소없음 ㅋㅋ!');
        } else {
            res.send(data);
        }
    });
});

app.get('/journal', function(req, res) {
    fs.readFile(__dirname + '/view/journal.html', 'utf8', function(err, data) {
        if(err) {
            res.statusCode = 404;
            res.send('수민이가 알려준다 여기 주소없음 ㅋㅋ!');
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, '127.0.0.1', function() {
    console.timeEnd('Server ON Time');
});

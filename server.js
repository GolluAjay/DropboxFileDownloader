var express = require('express');
var app = express();
// use line below if html file is in root directory
app.use(express.static(__dirname));
// use line below if html file is in nested folder
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.render('index.html');
});
app.listen(8080)
console.log('Server listening on localhost:8000');
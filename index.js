var express = require('express');
var app = express();
// var livereload = require('easy-livereload');
   
app.use(require('easy-livereload')());
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('lorem ipsum dolor');
});



app.listen(3000, () => {

    console.log('Server escutando porta 3000');
});
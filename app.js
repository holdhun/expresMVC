const express = require('express');
const path = require('path');
const app = express();
const bodyParse = require('body-parser');
const port = process.env.PORT || 3000;

app.set('views',path.join(__dirname , 'views') );
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(require('./controllers'));


app.listen(port, function() {
	console.log('listen to port:' + port);
});


const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'))

app.use(require('./routes/index'));
app.use('/data',require('../public/js/data'));

app.listen(app.get('port'), () => {
    console.log("server on port ${8080}");
});

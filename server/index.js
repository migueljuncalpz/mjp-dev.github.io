const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const { path } = require('express/lib/application');
const morgan = require('morgan');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/portfolio_db') // Database connection
    .then(db => console.log('Conected to '+db.connection.name))
    .catch(err => console.log(err));

//settings
app.set('port',process.env.PORT || 4000)

//middlewareskjn
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(require('./routes/home'))
app.use(require('./routes/contact'))
app.use(require('./routes/projects'))

//static files
app.use(express.static(__dirname+'/public'))

//Server
app.listen(app.get('port'),()=>{
    console.log('Server on port:',app.get('port'));
});
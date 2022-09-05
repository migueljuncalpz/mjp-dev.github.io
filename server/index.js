const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const { path } = require('express/lib/application');
const morgan = require('morgan');

require("dotenv").config()

const app = express();

console.log("user:"+process.env.DB_PASSWD);
mongoose.connect( `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@${process.env.DB_HOST}/${process.env.DB_NAME}`) // Database connection
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
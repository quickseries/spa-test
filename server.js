const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');
const logRouter = require('./routes/log');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(cors())

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to db
mongoose
	.connect(db, {useNewUrlParser: true})
	.then( () => console.log('Mongo DB Connected!'))
    .catch(err  => console.log(err));

//Routes
app.use('/api/log',logRouter);

// @route GET /
// @desc  backend test route 
// @access Public
app.get('/', (req,res)=>{
    res.send('quick series backend working')  
})
.listen(PORT, () => console.log('Listening at port :' + PORT));
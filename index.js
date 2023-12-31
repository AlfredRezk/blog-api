require('dotenv').config({path:'./config/app.env'});
require('colors');
require('express-async-errors');

const express = require('express');
const app = express();

// Configurations
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const MODE = process.env.MODE || 'production';

// Middlewares
app.use(express.json())  //To parse JSON requests (req.body)
app.use(require('./middlewares/logger')()) //logger
app.use('/img', express.static('./images'));
app.use(cors())

// Connect to database
require('./config/db')();


// Routes
app.use('/api', require('./routes/index'))
app.use('/', (req, res)=> res.redirect('/api/docs/swagger'))

// Error Handler
app.use(require('./middlewares/errorHandler'))

// Run server 
app.listen(PORT, console.log(`Server is running on ${MODE} mode, http://${HOST}:${PORT}`.blue))

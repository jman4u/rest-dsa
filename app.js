const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path: '.' + '/.env'});


//middelwares
app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require('./posts');

app.use('/posts', postsRoute);


app.get('/', (req, res) => {
    res.send('We are on home');
});



//connect to db

mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,}
);


app.listen(process.env.PORT || 3000);
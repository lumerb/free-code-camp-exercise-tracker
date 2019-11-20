const express = require('express');
const app = express();
const config = require('./config.js');
const bodyParser = require('body-parser');
const routes = require('./routes.js');
const mongoose = require('mongoose')
const uri = config.MONGO_DB;

mongoose.connect(uri, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch(err => {
        console.log(err);
        console.log('There was an error connecting with the db')
        process.exit();
    })


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));
routes(app);

app.listen(config.PORT, () => console.log('App listening on port ' + config.PORT));
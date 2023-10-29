const express = require('express');
const app = express();
const cors = require('cors');
const juiceController = require('./controllers/juiceController');



//middleware

app.use(cors());
//Line below tells app the accept JSON
app.use(express.json());

app.use('/juice', juiceController);

app.get('/', (req, res) => {
    res.send('Hello World!');
})









module.exports = app;
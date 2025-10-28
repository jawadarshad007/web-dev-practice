const express = require('express');
// const mongoConnect = require('./database');
const mongoConnect = require('./config/db');

const app = express();



app.get('/', (req, res) => {
    res.send('Hello World!');
});
mongoConnect((client) => {
        // console.log(client)
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
}); 





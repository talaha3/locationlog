const { response } = require('express');
const express = require('express');
const Datastore = require('nedb');
const app = express();
const database = new Datastore('database.db');
database.loadDatabase(); 
app.listen(3000, () => console.log('listening at 3000'));

app.use(express.static('public'));
app.use(express.json({limit: '2mb'}));

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
    response.json(data)
    });
});




app.post('/api', (request, response) => {
    console.log('I got a request');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    
    response.json(data)
});


const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// create
app.post('/insertInventory', (request, response) =>{
    const {date, time, reservations} = request.body;
    console.log('app.js')
    const db = dbService.getDbServiceInstance();

    const result = db.insertNewInventory(date, time, reservations);

    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err));
    
});

// read
app.get('/getInventory', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then( data => response.json({data: data}))
    .catch(err => console.log(err))
    console.log("test")
});

// update

// delete


app.listen(process.env.PORT, () => console.log('api running'));

const { Template } = require('ejs');
const express = require('express'),
Team = require('./dbFiles/team'),
dbOperation = require('./dbFiles/dbOperation'),
cors = require('cors');
const { default: App } = require('./src/App');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req, res) =>{
    console.log('called');
    const result = await dbOperation.getTeams(req.body.name);
    res.send(result.recordset);
});

app.post('/hello', function(req, res){
    console.log('called');
    res.send({result: 'OMG HI'});
});

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


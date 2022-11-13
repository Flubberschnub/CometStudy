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

app.post('/api', function(req, res){
    console.log('called');
    res.send({result: 'go away'});
});

app.post('/hello', function(req, res){
    console.log('called');
    res.send({result: 'OMG HI'});
});

//let Paprika = new Team('Paprika', 'ATEC 3451', '001', 'CB3', '1.223', '19:00');

//console.log(Paprika);
/*
dbOperation.getTeams().then(res => {
    console.log(res.recordset);
})
*/

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


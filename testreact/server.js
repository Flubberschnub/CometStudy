const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
cors = require('cors');

 //const API_PORT = process.env.PORT || 5000;
 //const app = express();

dbOperation.getTeams().then(res => {
    console.log(res.recordset);
})

 //app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));


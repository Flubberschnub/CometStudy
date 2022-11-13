const config = require('./dbConfig'),
    sql = require('mssql');

const getTeams = async () => {
    try {
        let pool = await sql.connect(config);
        let team = pool.request().query("SELECT * FROM makeTeam") // The semicolon may or may not be needed.
        console.log(team);
        return(team);
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getTeams
}
const config = require('./dbConfig'),
    sql = require('mssql');

const getTeams = async (groupname) => {
    try {
        let pool = await sql.connect(config);
        let team = await pool.request().query(`SELECT * FROM makeTeam WHERE groupName = '${groupname}'`);
        console.log(team);
        return(team);
    }
    catch(error) {
        console.log(error);
    }
}

const createTeams = async (Team) => {
    try {
        let pool = await sql.connect(config);
        let team = pool.request().query(`INSERT INTO makeTeam VALUES
        ('${Team.groupName}', '${Team.class}', '${Team.section}', '${Team.building}', '${Team.classroom}', '${team.endTime}')
        `) 
        return(team);
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getTeams,
    createTeams
}
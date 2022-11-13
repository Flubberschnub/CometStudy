const config = {
    user: 'Karen123',
    password: '12345',
    server: 'KAREM',
    database: 'Hacker Snackers',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;
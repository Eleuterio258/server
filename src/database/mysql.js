const mysql = require('mysql');
const promisify = require('util').promisify;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

pool.getConnection((err, connection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') console.log('DATABASE CONNECTION WAS CLOSED');
        if (err.code === 'ER_CON_COUNT_ERROR') console.log('DATABASE HAS TO MANY CONNECTIONS');
        if (err.code === 'ECONNREFUSED') console.log('DATABASE CONNECTION WAS REFUSED');
    }

    if (connection) connection.release();

    console.log('DataBase is connected to ' + process.env.DB_DATABASE);
    return;
});

pool.query = promisify(pool.query);
module.exports = pool;


const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'theo',
  database: 'MDS_BADMINTON_RESERVATION_API',
  password: 'Kurokura10'
});

module.exports = pool.promise();

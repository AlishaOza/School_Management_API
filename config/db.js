const mysql = require('mysql2');

const db = mysql.createConnection({
  host:' bhzwy3el1yogd6z5n5gy-mysql.services.clever-cloud.com',
  user: 'ujxyiirz0uxxkp14',
  password: 'IVHhggAGALaPCrliiWas',
  database: 'bhzwy3el1yogd6z5n5gy',
  port: 3306 // or the port Clever Cloud provides
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('MySQL connected successfully.');
});

module.exports = db;

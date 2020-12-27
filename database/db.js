const Pool = require('pg').Pool;

const pool = new Pool({  
    connectionString: process.env.DATABASE_URL,
    host: process.env.HOST,  
    user: process.env.DB_USER,  
    database: process.env.DATABASE,  
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
      }
});  

pool.connect();

module.exports = pool;
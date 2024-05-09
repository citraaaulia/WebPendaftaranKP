const { 
    createPool
} = require('mysql');

const pool = createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
})

pool.query('select * from login', (err, result, fiels)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

modules.exports = pool; 
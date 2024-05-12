//  var mysql = require('mysql');


// const {createPool} = require('mysql');

// const pool = createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "pendaftaran_kp",
//     connectionLimit:10
// });

// pool.query('select * from login', (err, result, fields)=>{
// if(err){
//     return console.log(err);
// }
// return console.log(result);
// });

const { Sequelize } = require("sequelize");

const db = new Sequelize('pweb', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;
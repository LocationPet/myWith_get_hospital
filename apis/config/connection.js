const mysql = require('mysql');  // mysql 모듈 로드
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '../../.env')})
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DP_PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

const conn = {  // mysql 접속 설정
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME
};

const pool = mysql.createPool(conn);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(err){
      console.log(err)
    }
    if(!err) {
      callback(conn);
    }
  });
}

module.exports = getConnection;
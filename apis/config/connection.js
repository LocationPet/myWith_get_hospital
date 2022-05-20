const mysql = require('mysql');  // mysql 모듈 로드
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '../../.env')})
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DP_PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DP_PASSWORD
const DB_NAME = process.env.DB_NAME

const conn = {  // mysql 접속 설정
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
};

const pool = mysql.createPool(conn);

exports.getConnectionPool = (callback) => {
  pool.getConnection((err, conn) => {
    if(!err) callback(conn)
  });
}
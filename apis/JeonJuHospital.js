const path = require('path');
const dotenv = require('dotenv');
const convert = require('xml-js');
const request = require('request');

const getConnection = require('./config/connection')

dotenv.config({path: path.join(__dirname, '../.env')})

const SERVICE_KEY = process.env.SERVIC_EKEY;
const URL = process.env.BASE_URL;

const jjHospital = () => {

  let queryParams = '?' + encodeURIComponent('serviceKey') + '=' + SERVICE_KEY; /* Service Key*/
  queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
  queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */

  request({
    url: URL + queryParams,
    method: 'GET'
  }, function (error, response, body) {
    const xml = body;
    const xmlToJson = convert.xml2json(xml, {compact: true, spaces: 2});
    const jsonData = JSON.parse(xmlToJson).rfcOpenApi.body.data.list;
    jsonData.map(i => {
      console.log(i)
      const data = [
        i.apiNewAddress._text,
        parseFloat(i.apiLng._text),
        parseFloat(i.apiTel._text),
        i.apiDongName._text,
        i.apiRegDate._text,
        "병원"
      ]
      getConnection((conn) => {
        const sql = 'INSERT INTO hospital(hospital_address, hospital_lat, hospital_lot, hospital_name, hospital_time, type) VALUES (?,?,?,?,?,?)';
        conn.query(sql,data, (err, doc) => {
          if(err){ console.log(err); }
        })
        conn.release();
      });
    })
  });

}
const test = () => {

}



module.exports = jjHospital;
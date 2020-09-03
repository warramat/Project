//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'userdata'
});

const app = express();

console.log(path.join(__dirname, './img'))
app.use('/static', express.static(path.join(__dirname, './img')));
app.get('/tbl_dri', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM tbl_dri', function (error, results, fields) {
     
      if (error) throw error;
      results = results.map((e) => ({
        ...e,
        image: 'http://172.16.186.70:3001/static/' + e.img
      }))
      
      res.send(results)
    });
  });
});

app.get('/tbl_study', function (req, res) {
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM tbl_study', function (error, results, fields) {
   
    if (error) throw error;
    // results = results.map((e) => ({
    //   ...e,
    //   image: 'http://172.16.186.70:3001/static/' + e.img
    // }))
    
    res.send(results)
  });
});
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/tbl_dri so you can see the data.');
});

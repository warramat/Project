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
        image: 'http://172.16.186.55:3001/static/' + e.img
      }))
      
      res.send(results)
    });
  });
});


app.get('/login', function (req, res) {
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM login', function (error, results, fields) {
    res.send(results)
  });
});
});


app.get('/datadriver', function (req, res) {
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM datadriver', function (error, results, fields) {
    res.send(results)
  });
});
});



app.listen(3000, () => {
 console.log('Go to http://172.16.186.130:3000/login so you can see the data.');
});

app.listen(3001, () => {
  console.log('Go to http://172.16.186.130:3001/datadriver so you can see the data.');
 });

 app.listen(3003, () => {
  console.log('Go to http://172.16.186.54:3000/get-Temperature-list so you can see the data.');
 });


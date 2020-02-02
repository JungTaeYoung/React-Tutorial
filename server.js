const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data);
const mysql = require('mysql')

const multer = require('multer');
const upload = multer({ dest: './upload' })
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})
connection.connect();


app.get('/api/customers', (req, res) => {
  console.log(333)
  connection.query(
    "SELECT * FROM customer where isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.use('/image', express.static('./upload'))
app.post('/api/customers', upload.single('image'), (req, res) => {
  console.log(33)
  let sql = 'INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;

  let params = [image, name, birthday, gender, job]
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})
app.post('/api/customersupdate', upload.single('image'), (req, res) => {
  // res.send('dd');
  console.log(req.body.name)
  let sql = 'UPDATE customer SET name=?, birthday=?, gender=?, job=? WHERE id=?';
  let id = req.body.id;
  // let image;
  // if ((req.body.image).indexOf("image/") != -1) {
  //   image = req.body.image;
  // } else {
  //   image = '/image/' + req.body.image;
  // }
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;

  //let params = [image, name, birthday, gender, job, id]
  let params = [name, birthday, gender, job, id]
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE customer SET isDeleted = 1 where id = ?';
  let params = [req.params.id]
  connection.query(sql, params,
    (err, rows, fields) => {
      console.log(req.params.id)
      res.send(rows);
    })
})

app.listen(port, () => console.log(`listening on port ${port}`));
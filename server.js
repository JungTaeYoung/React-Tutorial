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
    "SELECT * FROM customer",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.use('/image', express.static('./upload'))
app.post('/api/customers', upload.single('image'), (req, res) => {
  console.log(33)
  let sql = 'INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?)';
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

app.listen(port, () => console.log(`listening on port ${port}`));
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/any/1',
      'name': '정태영',
      'birthday': '991114',
      'gender': '남자',
      'job': '프로그래머'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/any/2',
      'name': '홍길동',
      'birthday': '950524',
      'gender': '남자',
      'job': '프로그래머'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/any/3',
      'name': '나동빈',
      'birthday': '990511',
      'gender': '남자',
      'job': '프로그래머'
    }
  ])
})

app.listen(port, () => console.log(`listening on port ${port}`));
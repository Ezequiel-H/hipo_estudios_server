const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const fs = require('fs');
const { getUserById } = require('./controllers/users');
const { addStudyForUser, getStudyById } = require('./controllers/studies');

const app = express();
const port = process.env.BACKEND_PORT;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const dictionary = fs.readFileSync('/usr/share/dict/words').toString().split('\n');

app.post('/', (req, res) => {
  const lowCasePrefix = req.body.prefix.toLowerCase();
  const lengthOfPrefix = req.body.prefix.length;

  const response = dictionary.filter((word) => {
    const lowCaseWordSlice = word.toLowerCase().slice(0, lengthOfPrefix);
    return lowCasePrefix === lowCaseWordSlice;
  });

  res.send(response);
});

app.post('/study/:userId', (req, res) => {
  const { userId } = req.params;
  addStudyForUser(userId, req.body.study);
  res.send(req.body.study);
});

app.get('/user/:userId', (req, res) => {
  const { userId } = req.params;
  const user = getUserById(userId);
  res.send(user);
});

app.get('/study/:studyId', (req, res) => {
  const { studyId } = req.params;
  const study = getStudyById(studyId);
  res.send(study);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

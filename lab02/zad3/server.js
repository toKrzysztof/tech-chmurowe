const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cats').then(res => console.log(res));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Terminator' });
kitty.save().then(() => console.log('Zarejestrowano pierwszego terminatora w schronisku'));

app.get('/cats', async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats)
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/cat', async (req, res) => {
  try {
    const kitty = new Cat({ name: 'TERMINATOR' });
    kitty.save().then(() => console.log('ZAREJESTROWANO NOWEGO TERMINATORA W SCHRONISKU'));
    res.status(201).json(kitty)
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server is running on port ' + 8080);
});

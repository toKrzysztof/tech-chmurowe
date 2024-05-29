const express = require('express');
const mongoose = require('mongoose');

// Konfiguracja połączenia z MongoDB
mongoose.connect('mongodb://database:27017/User').then(console.log)

// Definicja schematu i modelu użytkownika
const User = mongoose.model('User', { name: String });

const user = new User({ name: 'Terminator' });
user.save().then(() => console.log('Zarejestrowano pierwszego terminatora'));

const app = express();
const port = 3000;

// Endpoint GET /users
app.get('/users', async (req, res) => {
  console.log("test")
  try {
    const users = await User.find();
    console.log(users)
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
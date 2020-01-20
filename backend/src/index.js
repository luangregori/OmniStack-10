const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/omnistack',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);
console.log('Server running in 3333...')
app.listen(3333);
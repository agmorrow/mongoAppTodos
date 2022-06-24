const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect('mongodb://localhost:27017/mongoAppTodo')

.then(async () => {
  console.log('Successfully connected to MongoDB');
  
})
.catch(err => console.log(err));

// Tells node we're using handlebars as our templating engine
// configured handlebars as the view engine
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => console.log('Server is running'));
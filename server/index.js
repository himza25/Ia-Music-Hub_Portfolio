const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const creationsRouter = require('./routes/creations');

app.use('/users', usersRouter);
app.use('/creations', creationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
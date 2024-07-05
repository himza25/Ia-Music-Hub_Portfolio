const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const creationsRouter = require('./routes/creations');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configuration CORS
const corsOptions = {
  origin: '*', // Permettre toutes les origines pour le développement
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true,
}).then(() => {
  console.log('MongoDB database connection established successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/users', usersRouter);
app.use('/creations', creationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});